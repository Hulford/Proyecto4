import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routing.module';
import { SharedModule } from './shared/components/menu/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';


import localEsMx from '@angular/common/locales/es-MX';
import localFrCa from '@angular/common/locales/fr-CA';


import { registerLocaleData } from '@angular/common';


registerLocaleData(localEsMx);
registerLocaleData(localFrCa);

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
AppRouterModule,
SharedModule,
BrowserAnimationsModule,
ButtonModule
  ],
  providers: [
  {  provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
