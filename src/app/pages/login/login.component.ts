import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutService } from '../../layout/layout.service';

import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ButtonModule,
    ColorPickerModule,
    FormsModule,
    InputTextModule,
    RouterModule
  ],
})
export class LoginComponent implements OnInit {

  constructor(public layoutServ: LayoutService){}

  ngOnInit(): void {
    this.cambiarTemaTopBar();
  }


  colorTopBar: string | null = '#55ad94';
  nuevoTextoTopBar: string | null = '#330d33';

  cambiarTemaTopBar(){
    document.documentElement.style.setProperty('--color-fondo-TopBar', this.colorTopBar);
    document.documentElement.style.setProperty('--color-texto-TopBar', this.nuevoTextoTopBar);
  }

  colorLogin: string | null = 'white';
  nuevoTextoLogin: string | null = 'red';
  cambiarTemaLogin(){
    document.documentElement.style.setProperty('--color-fondo-Login', this.colorLogin);
    document.documentElement.style.setProperty('--color-texto-Login', this.nuevoTextoLogin);
  }

  colorSlider: string | null = 'white';
  nuevoTextoSlider: string | null = 'red';
  titleSlider: string | null = null;
  cambiarTemaSider(){
    document.documentElement.style.setProperty('--color-texto-Slider', this.nuevoTextoSlider);
    document.documentElement.style.setProperty('--p-drawer-background', this.colorSlider);
    document.documentElement.style.setProperty('--p-drawer-color', this.titleSlider);
  }
}
