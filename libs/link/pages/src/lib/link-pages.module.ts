import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinkCreateComponent } from './link-create/link-create.component';
import { LinkListComponent } from './link-list/link-list.component';

const routes: Routes = [
  { path: 'links', component: LinkCreateComponent },
  { path: '', redirectTo: '/links', pathMatch: 'full' },
  { path: 'list', component: LinkListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [LinkCreateComponent, LinkListComponent],
  exports: [RouterModule],
})
export class LinkPagesModule {}
