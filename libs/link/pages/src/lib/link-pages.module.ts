import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LinkCreateComponent, LinkUiModule } from '@front-nx/link/ui';
import { AppRoutingModule } from 'apps/links/src/app/app-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LinkDetailPagesComponent } from './link-detail-pages/link-detail-pages.component';
import { ListPageComponent } from './list-page/list-page.component';



@NgModule({
  imports: [
    BrowserModule,
    LinkUiModule,
    LinkCreateComponent,
    AppRoutingModule,
  ],
  declarations: [
    HomepageComponent,
    ListPageComponent,
    LinkDetailPagesComponent,
    AboutPageComponent,
  ],
  exports: [
    HomepageComponent,
    ListPageComponent,
    LinkDetailPagesComponent,
    AboutPageComponent,
  ],
})
export class LinkPagesModule {}
