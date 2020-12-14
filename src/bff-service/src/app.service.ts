import { HttpService, Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  handleRequest<T>(config: AxiosRequestConfig): Observable<T> {
    return this.httpService
      .request<T>(config)
      .pipe(map((response) => response.data));
  }
}
