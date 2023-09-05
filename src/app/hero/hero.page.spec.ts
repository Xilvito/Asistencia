import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroPage } from './hero.page';

describe('HeroPage', () => {
  let component: HeroPage;
  let fixture: ComponentFixture<HeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
