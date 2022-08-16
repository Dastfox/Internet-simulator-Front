import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkCrudComponent } from '../../../../libs/link-crud/src/lib/link-crud/link-crud.component';

const routes: Routes = [
  { path: 'links', component: LinkCrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }