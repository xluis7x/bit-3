import { Component } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { NgOptimizedImage } from '@angular/common';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-not-found',
  imports: [Navigation, NgOptimizedImage, Header, Footer],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}
