import { Component } from '@angular/core';
import 'bootstrap';
import 'bootswatch/dist/cosmo/bootstrap.min.css'; // Added this :boom:

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portafolio';
}
