import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ErrorsInterceptor());
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
