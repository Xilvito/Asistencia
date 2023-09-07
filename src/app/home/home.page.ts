import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = 'Sherlock Holmes';
  labelCabecera: any;
  animacion_labelCabecera: any;
  animationCtrl: any;
  

  constructor(private router: Router) {}

  irAPaginaProfesores() {
    this.router.navigate(['/login']);
  }

  irAPaginaAlumnos() {

    this.router.navigate(['/login']);
  };



ngAfterViewInit() {
  this.animacion_labelCabecera = this.animationCtrl
    .create()
    .addElement(this.labelCabecera.nativeElement)
    .duration(3000)
    .iterations(Infinity)
    /*.fromTo('transform', 'translateX('+px_screem/2+'px)', 'translateX('+px_screem+'px)')
    .fromTo('opacity', '1', '0.2')*/
    .keyframes([
      { offset: 0, transform: 'translateX(0%)'},
      { offset: 0.5, transform: `translateX(50%)` },
      { offset: 1, transform: `translateX(100%)` },
    ])
    .fromTo('opacity', '1', '0.2');

  this.animacion_labelCabecera.play();

  
}

}
