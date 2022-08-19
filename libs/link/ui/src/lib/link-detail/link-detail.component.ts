import { Component, OnInit } from '@angular/core';
import { Link } from '@front-nx/link/state';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'front-nx-link-detail',
  templateUrl: './link-detail.component.html',
  styleUrls: ['./link-detail.component.css'],
})
export class LinkDetailComponent implements OnInit {
  link: Link []= [];

  constructor(
    private route: ActivatedRoute,
    private linkStateService: LinkStateService,
    private location: Location
  ) {}

  ngOnInit(): void {
  this.getHero();}

  getHero():void {
    const guid = String(this.route.snapshot.paramMap.get('guid'));
    this.linkStateService.getLinkFS(guid)
    .subscribe(link => {this.link = link
      console.log(this.link)  });
  }
}
