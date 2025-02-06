import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [ButtonModule, RouterModule]
})
export class HomeComponent {

}
