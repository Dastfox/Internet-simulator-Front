import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkCreateComponent } from './link-create/link-create.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [LinkListComponent, LinkCreateComponent],
  exports: [LinkCreateComponent]
})
export class LinkUiModule {}