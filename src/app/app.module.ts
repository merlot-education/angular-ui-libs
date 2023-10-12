import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  MBasicUiModule,
  CardWithTitleComponent,
  PaginatorComponent,
  GridComponent,
  NavHeaderComponent,
  LayoutModule,
} from '@m-basic-ui';
import { AppRoutingModule } from './app.routing.module';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MBasicUiModule,
    CardWithTitleComponent,
    PaginatorComponent,
    GridComponent,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
