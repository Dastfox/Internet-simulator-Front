import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LinkPagesModule } from '@front-nx/link/pages'
import { LinkUiModule } from '@front-nx/link/ui';
import { CounterComponent } from 'libs/link/ui/src/lib/counter/counter.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, LinkPagesModule, LinkUiModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
