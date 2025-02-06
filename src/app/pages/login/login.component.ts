import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ButtonModule,
    ColorPickerModule,
    FormsModule
  ],
})
export class LoginComponent {


  colorTopBar: string | null = 'white';
  nuevoTextoTopBar: string | null = 'red';

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
}
