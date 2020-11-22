import { AWS_CONFIG } from '@nodejsaws/shared';
import { S3 } from 'aws-sdk';
import { Readable } from 'stream';
import { v4 } from 'uuid';

class SimpleStrorageService {
  private client = new S3({ region: AWS_CONFIG.region });

  public async getSignedUrl(key: string): Promise<String> {
    const params = {
      Bucket: AWS_CONFIG.bucket,
      Key: `uploaded/${v4()}.${key}`,
      Expires: 60,
      ContentType: 'text/csv',
    };
    return await this.client.getSignedUrlPromise('putObject', params);
  }

  public createReadStream(key: string): Readable {
    return this.client
      .getObject({ Bucket: AWS_CONFIG.bucket, Key: key })
      .createReadStream();
  }

  public async copyObject(
    target: string,
    destination: string
  ): Promise<S3.CopyObjectOutput> {
    const params = {
      Bucket: AWS_CONFIG.bucket,
      CopySource: `${AWS_CONFIG.bucket}/${target}`,
      Key: destination,
    };
    return await this.client.copyObject(params).promise();
  }

  public async deleteObject(key: string): Promise<unknown> {
    const params = {
      Bucket: AWS_CONFIG.bucket,
      Key: key,
    };
    return await this.client.deleteObject(params).promise();
  }
}

export const simpleStrorageService = new SimpleStrorageService();
