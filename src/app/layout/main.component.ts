import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from './layout.service';

import { ButtonModule } from 'primeng/button';
import { SlideBarComponent } from "./slide-bar/slide-bar.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
  , imports: [
    RouterModule,
    ButtonModule,
    SlideBarComponent
],
})
export class MainComponent {

  constructor(public layoutServ: LayoutService) { }
}
