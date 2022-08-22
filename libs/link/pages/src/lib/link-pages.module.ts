import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LinkUiModule } from '@front-nx/link/ui';
import { HomepageComponent } from './homepage/homepage.component';
import { ListPageComponent } from './list-page/list-page.component';
import { LinkDetailPagesComponent } from './link-detail-pages/link-detail-pages.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'list', component: ListPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'details/:id', component: LinkDetailPagesComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, LinkUiModule, ],
  declarations: [
    HomepageComponent,
    ListPageComponent,
    LinkDetailPagesComponent,
  ],
  exports: [RouterModule],
})
export class LinkPagesModule {}
