import { Component } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-home',
  imports: [Navigation, Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
