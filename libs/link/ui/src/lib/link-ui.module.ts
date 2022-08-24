import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { LinkDetailComponent } from './link-detail/link-detail.component';
import { LinkListComponent } from './link-list/link-list.component';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [
    LinkListComponent,
    CounterComponent,
    LinkDetailComponent,
    AboutComponent,
  ],
  exports: [LinkListComponent, CounterComponent, LinkDetailComponent],
})
export class LinkUiModule {}
