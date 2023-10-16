import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  MBasicUiModule,
  PaginatorComponent,
  GridComponent,
  CardComponent,
} from 'm-basic-ui';
import { AppRoutingModule } from './app.routing.module';
import { DemoComponent } from './demo/demo.component';
import { LayoutModule } from 'm-dashboard-ui';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // basic ui
    MBasicUiModule,
    CardComponent,
    PaginatorComponent,
    GridComponent,

    // dashboard ui
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
