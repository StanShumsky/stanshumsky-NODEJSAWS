import { AWS_CONFIG } from '@nodejsaws/shared';
import { SNS } from 'aws-sdk';
import { IProduct } from './product.interface';

class NotificationService {
  private client = new SNS({ region: AWS_CONFIG.region });

  private async publish(
    subject: string,
    message: string,
    messageAttributes: SNS.MessageAttributeMap
  ): Promise<SNS.PublishResponse> {
    return await this.client
      .publish({
        Subject: subject,
        Message: message,
        TopicArn: AWS_CONFIG.snsArn,
        MessageAttributes: messageAttributes,
      })
      .promise();
  }

  public async createProductSuccessNotification(
    product: IProduct
  ): Promise<SNS.PublishResponse> {
    const subject = 'Product successfully created';
    const message = `${product.title}, ${product.description}, ${product.price}, ${product.count}`;
    const messageAttributes = {
      status: {
        DataType: 'String.Array',
        StringValue: JSON.stringify(['Success']),
      },
    };
    return await this.publish(subject, message, messageAttributes);
  }

  public async createProductErrorNotification(
    error: unknown
  ): Promise<SNS.PublishResponse> {
    const subject = 'Create Product failed';
    const message = JSON.stringify(error);
    const messageAttributes = {
      status: {
        DataType: 'String.Array',
        StringValue: JSON.stringify(['Error']),
      },
    };
    return await this.publish(subject, message, messageAttributes);
  }
}

export const notificationService = new NotificationService();
