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
  nuevoTextoTopBar: string | null = 'black';

  cambiarTemaTopBar(){
    // const nuevoFondo = document.documentElement.style.getPropertyValue('--color-fondo') === 'white' ? 'black' : 'white';
    // const nuevoTexto = nuevoFondo === 'white' ? 'black' : 'white';

    document.documentElement.style.setProperty('--color-fondo-TopBar', this.colorTopBar);
    document.documentElement.style.setProperty('--color-texto-TopBar', this.nuevoTextoTopBar);
  }
}
