import { Component } from '@angular/core';

import { DrawerModule } from 'primeng/drawer';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.scss',
  imports: [
    DrawerModule
  ],
})
export class SlideBarComponent {

  constructor(public layoutServ: LayoutService){}

}
