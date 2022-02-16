import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import * as ApiServiceProxies from './service-proxies';
import {LoadingService} from './loading.service';
import {ErrorHandling} from './error-handling.Interceptor';

@NgModule({
  providers: [
    LoadingService,
    ApiServiceProxies.CourseServiceProxy,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandling, multi: true},
  ]
})
export class ServiceProxyModule { }
