import { Component, ElementRef, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { Hero } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  template: `
  <mat-form-field>
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]="picker">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>

    <ion-card>
      <ion-card-content #cardContent>
        <h1>{{ title }}</h1>
        <h2>mi heroe favorito: {{ myHero.name }}</h2>
        <ul>
          <li *ngFor="let hero of heroes">{{ hero.name }}</li>
        </ul>
        <p *ngIf="heroes.length > 3">There are many heroes!</p>
      </ion-card-content>
    </ion-card>
  `,
})
export class HomePage {
  title = 'Tour de Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
  ];

  myHero = this.heroes[2];

  @ViewChild('cardContent', { read: ElementRef, static: false }) cardContent!: ElementRef<HTMLElement>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.cardContent.nativeElement)
      .duration(2500)
      .iterations(1)
      .fromTo('transform', 'translateX(20px)', 'translateX(650px)');

    this.animation.play();
  }
}
