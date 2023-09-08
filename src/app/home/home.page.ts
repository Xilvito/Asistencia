import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonCard } from '@ionic/angular';
import { AnimationController, Animation } from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  private animation: Animation |undefined;

  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras?.state?.['user'];
      }
      else{
        this.router.navigate(["/login"])
      }
    });
    
  }
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(12)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('f', '1', '0.2');
      this.animation.play();
  }


}
