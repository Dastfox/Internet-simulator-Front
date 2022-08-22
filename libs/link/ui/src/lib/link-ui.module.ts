import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkCreateComponent } from './link-create/link-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter.component';
import { LinkDetailComponent } from './link-detail/link-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, RouterModule ],
  declarations: [
    LinkListComponent,
    LinkCreateComponent,
    CounterComponent,
    LinkDetailComponent,
  ],
  exports: [
    LinkCreateComponent,
    LinkListComponent,
    CounterComponent,
    LinkDetailComponent,
  ],
})
export class LinkUiModule {}
