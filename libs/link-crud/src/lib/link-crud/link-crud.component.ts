import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../../apps/links/Link';
import { LinkCrudService } from './link-crud.service';

@Component({
  selector: 'front-nx-link-crud',
  templateUrl: './link-crud.component.html',
  styleUrls: ['./link-crud.component.css'],
  
})
export class LinkCrudComponent implements OnInit {
  links : Link[] = [];
  constructor(private LinkCrudService : LinkCrudService) { }
    
  ngOnInit(): void {
  this.getlink();
  }
  
getlink(): void {
    this.LinkCrudService.getlink()
        .subscribe(link => this.links = link);
  }
add(url: string): void {
  url = url.trim();
  if (!url) { return; }
  this.LinkCrudService.addLink({ url } as Link)
    .subscribe(link => {
      this.links.push(link);
    });
}
}



// 
// import { MessageService } from '../message.service';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css']
// })
// export class HeroesComponent implements OnInit {

//   heroes: Hero[] = [];

//   constructor(private heroService: HeroService, private messageService: MessageService) { }

//   ngOnInit(): void {
//     this.getHeroes();
//   }

//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }
//   add(name: string): void {
//     name = name.trim();
//     if (!name) { return; }
//     this.heroService.addHero({ name } as Hero)
//       .subscribe(hero => {
//         this.heroes.push(hero);
//       });
//   }
//   delete(hero: Hero): void {
//     this.heroes = this.heroes.filter(h => h !== hero);
//     this.heroService.deleteHero(hero.id).subscribe();
//   }
// }