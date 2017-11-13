import { Component, OnInit } from '@angular/core';
import {HeroService, Hero} from './hero.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  providers: [HeroService]
})
export class AnimationsComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = heroService.heroes;
  }

  ngOnInit() {
  }

}
