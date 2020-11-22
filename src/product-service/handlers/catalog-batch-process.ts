import {
  IProduct,
  notificationService,
  queueService,
  validate,
} from '@nodejsaws/shared';
import { SQSEvent, SQSHandler } from 'aws-lambda';
import { productSchema } from '../product.schema';
import { productService } from '../product.service';

export const handler: SQSHandler = async (event: SQSEvent): Promise<void> => {
  try {
    for (const record of event.Records) {
      const products = JSON.parse(record.body);

      for (const product of products) {
        try {
          const { value, error } = validate(productSchema, product);
          if (error) {
            throw error;
          }
          const result: IProduct = await productService.create(value);
          await notificationService.createProductSuccessNotification(result);
        } catch (error) {
          await notificationService.createProductErrorNotification(error);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};
