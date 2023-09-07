import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user={
    usuario:"nico",
    password:"1234"
  }

  field:string="";

  constructor(private router: Router,public toastController: ToastController) { }

  ngOnInit() {
  }

  ingresar(){
    
    try{
      if(this.validateModel(this.user)){
        let navigationExtras: NavigationExtras = {
          state: {
            user: this.user
          }
        };
        
        this.router.navigate(['/home'],navigationExtras);
      }
      else{
        this.presentToast(this.field);
      }
      
    }
    catch(error){
      
      this.router.navigate(['/login']);
    }
    
  }

  validateModel(model:any){
    for (var [key, value] of Object.entries(model)) {
      if (value=="") {
        this.field="Falta : "+key;
        return false;
      }
    }
    
    var password = model.password;
    const regex = /^[0-9]*$/;
    const onlyNumbers = regex.test(password); // true
    if(!onlyNumbers){
      this.field = "Password invalida";
      return false;
    }
    else if(model.usuario.length < 3 || model.usuario.length > 8){
      this.field = "Usuario invalido";
      return false;
    }
    else if(model.password.length != 4){
      this.field = "Password invalida";
      return false;
    }
    return true;
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

}

