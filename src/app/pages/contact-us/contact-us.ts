import { Component } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-contact-us',
  imports: [Navigation, Header, Footer],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs {

}
