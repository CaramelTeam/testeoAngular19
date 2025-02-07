import { Component } from '@angular/core'
import { RouterModule } from '@angular/router';
import { SlideBarComponent } from "./layout/slide-bar/slide-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, SlideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'angular19';
}
