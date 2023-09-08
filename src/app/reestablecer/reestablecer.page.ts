import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
  }

  user={
    usuario:''
  }

  async presentAlert1(){
      const alerta = await this.alertController.create({
        header:"Mensaje",
        message: "Estimado/a " + this.user.usuario +" se ha enviado un correo para reestablecer su contraseña" , 
        buttons: ["OK"],
      });
      await alerta.present();
      let result = await alerta.onDidDismiss();
      
      console.log(result)
      this.router.navigate(['login']);
      
      
    }
}
