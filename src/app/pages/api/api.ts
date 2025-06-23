import { Component, inject, OnInit } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { PotterApi } from '../../services/api';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-api',
  imports: [Navigation, NgOptimizedImage],
  templateUrl: './api.html',
  styleUrl: './api.css'
})
export class Api implements OnInit{
  private api = inject(PotterApi)
  books!: any[]; 
  chars!: any[];
  houses!: any[];
  spells!: any[];

  ngOnInit(): void {
    this.api.getBooks().subscribe((res:any)=> {
      this.books = res;
      console.log("books: ", this.books)
    })
    this.api.getChar().subscribe((res:any)=> {
      this.chars = res;
      console.log(this.chars)
    })
    this.api.getHouses().subscribe((res:any)=> {
      this.houses = res;
      console.log(this.houses)
    })
    this.api.getSpells().subscribe((res:any)=> {
      this.spells = res;
      console.log(this.spells)
    })
  }

}
