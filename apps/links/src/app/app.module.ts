import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LinkPagesModule } from '@front-nx/link/pages'


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LinkPagesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
