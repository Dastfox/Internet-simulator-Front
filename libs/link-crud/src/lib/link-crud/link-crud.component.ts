// import { Component, OnInit } from '@angular/core';
// import { Link } from '../../../../../apps/links/Link';
// import { LinkCrudService } from './link-crud.service';

// @Component({
//   selector: 'front-nx-link-crud',
//   templateUrl: './link-crud.component.html',
//   styleUrls: ['./link-crud.component.css'],
  
// })
// export class LinkCrudComponent implements OnInit {
//   links : Link[] = [];
//   constructor(private LinkCrudService : LinkCrudService) { }
    
//   ngOnInit(): void {
//   this.getlink();
//   }
  
// getlink(): void {
//     this.LinkCrudService.getlink()
//         .subscribe(link => this.links = link);
//   }
// add(url: string): void {
//   url = url.trim();
//   if (!url) { return; }
//   this.LinkCrudService.addLink({ url } as Link)
//     .subscribe(link => {
//       this.links.push(link);
//     });
// }
// }



