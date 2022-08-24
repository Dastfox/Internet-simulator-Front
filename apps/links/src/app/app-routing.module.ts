import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from 'libs/link/pages/src/lib/about-page/about-page.component';
import { HomepageComponent } from 'libs/link/pages/src/lib/homepage/homepage.component';
import { LinkDetailPagesComponent } from 'libs/link/pages/src/lib/link-detail-pages/link-detail-pages.component';
import { ListPageComponent } from 'libs/link/pages/src/lib/list-page/list-page.component';
import {ImagesRandomPageComponent} from '@front-nx/images/pages';
import {ImagesAddPageComponent} from '@front-nx/images/pages'

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'list', component: ListPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'details/:id', component: LinkDetailPagesComponent },
  { path: 'images', component: ImagesRandomPageComponent},
  { path: 'imagesadd', component: ImagesAddPageComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
