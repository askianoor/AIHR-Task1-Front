import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConsts } from './shared/AppConsts';
import { ServiceProxyModule } from './shared/service-proxies/service-proxy.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceProxyModule,
    NgxLoadingXModule.forRoot(AppConsts.ngxLoadingXConfig),
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
