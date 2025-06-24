import { Component } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [Navigation, Header, Footer],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}
