import {
  All,
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Req,
  UseInterceptors,
  Request,
  BadGatewayException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Method } from 'axios';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get('/product')
  @UseInterceptors(CacheInterceptor)
  public getProducts(@Req() req: Request) {
    const recipientURL = this.configService.get<string>('services.product');
    return this.appService.handleRequest({
      url: recipientURL,
      method: req.method as Method,
    });
  }

  @All(':recipientServiceName')
  public proxyAll(
    @Req() req: Request,
    @Param() params: { recipientServiceName: string },
  ) {
    const recipientURL = this.configService.get<string>(
      `services.${params.recipientServiceName}`,
    );

    if (recipientURL) {
      return this.appService.handleRequest({
        url: recipientURL,
        data: req.body,
        method: req.method as Method,
      });
    }

    throw new BadGatewayException('Cannot process request.');
  }
}
