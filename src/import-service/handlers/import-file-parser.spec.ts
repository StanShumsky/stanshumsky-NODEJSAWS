import createEvent from '@serverless/event-mocks';
import { S3Event, S3EventRecord } from 'aws-lambda';
import { handler as importFileParser } from './import-file-parser';
import { join } from 'path';
import { createReadStream } from 'fs';
import { simpleStrorageService } from '../ simple-storage.service';
import { queueService } from '@nodejsaws/shared';

describe('importFileParser', () => {
  it('should parse the file', async () => {
    const mockEvent = createEvent('aws:s3', {
      Records: [{ s3: { object: { key: 'test' } } } as S3EventRecord],
    } as S3Event);
    const readStream = createReadStream(join(__dirname, 'products.csv'));
    simpleStrorageService.createReadStream = jest
      .fn()
      .mockReturnValue(readStream);
    simpleStrorageService.copyObject = jest
      .fn()
      .mockReturnValue(Promise.resolve());
    simpleStrorageService.deleteObject = jest
      .fn()
      .mockReturnValue(Promise.resolve());
    queueService.sendMessage = jest.fn().mockReturnValue(Promise.resolve());

    await importFileParser(mockEvent, null, null);

    expect(queueService.sendMessage).toHaveBeenCalledTimes(1);
    expect(simpleStrorageService.createReadStream).toHaveBeenCalledTimes(1);
    expect(simpleStrorageService.copyObject).toHaveBeenCalledTimes(1);
    expect(simpleStrorageService.deleteObject).toHaveBeenCalledTimes(1);
  });
});
