import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkCrudComponent } from 'libs/link-crud/src/lib/link-crud/link-crud.component'
import { LinkPagesModule } from '@front-nx/link/pages'


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LinkPagesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
