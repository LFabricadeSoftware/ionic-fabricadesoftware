import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
     
  public wavesPosition: number = 0;
  public wavesDifference: number = 50;
  public userLogin: User = {};
  public userCadastro: User = {};


  constructor(public keyboard: Keyboard) { }

  ngOnInit() {
    
  }
  
  login(){

  }
  cadastro(){
    console.log(this.userCadastro);
  }

}
