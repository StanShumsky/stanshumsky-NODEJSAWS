import { notificationService } from '@nodejsaws/shared';
import createEvent from '@serverless/event-mocks';
import { SQSEvent } from 'aws-lambda';
import { mockProduct } from '../mock/product.mock';
import { productService } from '../product.service';
import { handler as catalogBatchProcess } from './catalog-batch-process';

describe('importFileParser', () => {
  it('given product records are valid', async () => {
    const mockEvent = createEvent('aws:sqs', {
      Records: [
        { body: JSON.stringify([mockProduct()]) },
        { body: JSON.stringify([mockProduct(), mockProduct()]) },
      ],
    } as SQSEvent);
    productService.create = jest.fn().mockReturnValue(Promise.resolve());
    notificationService.createProductSuccessNotification = jest
      .fn()
      .mockReturnValue(Promise.resolve());
    notificationService.createProductErrorNotification = jest
      .fn()
      .mockReturnValue(Promise.resolve());

    await catalogBatchProcess(mockEvent, null, null);

    expect(productService.create).toHaveBeenCalledTimes(3);
    expect(
      notificationService.createProductSuccessNotification
    ).toHaveBeenCalledTimes(3);
    expect(
      notificationService.createProductErrorNotification
    ).not.toHaveBeenCalled();
  });

  it('given product records are invalid', async () => {
    const product = mockProduct();
    product.price = null;
    const mockEvent = createEvent('aws:sqs', {
      Records: [{ body: JSON.stringify([product]) }],
    } as SQSEvent);
    productService.create = jest.fn().mockReturnValue(Promise.resolve());
    notificationService.createProductSuccessNotification = jest
      .fn()
      .mockReturnValue(Promise.resolve());
    notificationService.createProductErrorNotification = jest
      .fn()
      .mockReturnValue(Promise.resolve());

    await catalogBatchProcess(mockEvent, null, null);

    expect(productService.create).not.toHaveBeenCalled();
    expect(
      notificationService.createProductErrorNotification
    ).toHaveBeenCalledTimes(1);
    expect(
      notificationService.createProductSuccessNotification
    ).not.toHaveBeenCalled();
  });
});
