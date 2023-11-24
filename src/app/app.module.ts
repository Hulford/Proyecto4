import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routing.module';
import { SharedModule } from './shared/components/menu/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
