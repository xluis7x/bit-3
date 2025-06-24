import { Component } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navigation, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
