import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkCrudComponent } from '../../../../libs/link-crud/src/lib/link-crud/link-crud.component';
import { LinkListComponent } from '../../../../libs/link-list/src/lib/link-list/link-list.component';

const routes: Routes = [
  { path: 'links', component: LinkCrudComponent },
  { path: '', redirectTo: '/links', pathMatch: 'full' },
  { path: 'list', component: LinkListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }