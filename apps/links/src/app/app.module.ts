import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LinkCrudComponent } from 'libs/link-crud/src/lib/link-crud/link-crud.component'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, LinkCrudComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
