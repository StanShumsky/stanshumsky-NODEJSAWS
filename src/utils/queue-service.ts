import { AWS_CONFIG } from '@nodejsaws/shared';
import { SQS } from 'aws-sdk';

class QueueService {
  private client = new SQS({ region: AWS_CONFIG.region });

  public async sendMessage<T>(data: T): Promise<SQS.SendMessageResult> {
    return await this.client
      .sendMessage({
        QueueUrl: AWS_CONFIG.sqsUrl,
        MessageBody: JSON.stringify(data),
      })
      .promise();
  }
}

export const queueService = new QueueService();
