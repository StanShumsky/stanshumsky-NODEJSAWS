import { IProduct, queueService } from '@nodejsaws/shared';
import { S3Event, S3Handler } from 'aws-lambda';
import * as csvParser from 'csv-parser';
import { Readable } from 'stream';
import { simpleStrorageService } from '../ simple-storage.service';

export function handleReadStream<T>(stream: Readable): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const result = [];

    stream.on('data', (row) => {
      console.log(row);
      result.push(row);
    });
    stream.on('end', () => resolve(result));
    stream.on('error', (error) => reject(error));
  });
}

export const handler: S3Handler = async (event: S3Event): Promise<void> => {
  try {
    for (const record of event.Records) {
      const target = record.s3.object.key;
      const csvParserStream = simpleStrorageService
        .createReadStream(target)
        .pipe(csvParser());

      const products = await handleReadStream<IProduct>(csvParserStream);
      await queueService.sendMessage(products);
      await simpleStrorageService.copyObject(
        target,
        target.replace('uploaded', 'parsed')
      );
      await simpleStrorageService.deleteObject(target);
    }
  } catch (error) {
    console.error(error);
  }
};
