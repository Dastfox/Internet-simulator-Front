import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LinkPagesModule } from '@front-nx/link/pages';
import { LinkUiModule } from '@front-nx/link/ui';
import { AppRoutingModule } from 'apps/links/src/app/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LinkPagesModule,
    LinkUiModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
