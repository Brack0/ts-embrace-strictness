import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Hero } from '../hero';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink, HeroSearchComponent],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  topHeroes: string;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .pipe(map((heroes) => heroes.slice(1, 5)))
      .subscribe((heroes) => {
        this.heroes = heroes;
        this.topHeroes = heroes.map((hero) => hero.name).join(', ');
      });
  }
}
