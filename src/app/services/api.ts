import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PotterApi {
  constructor() {}
  private httpClient = inject(HttpClient)
  private potterApiBooks = 'https://potterapi-fedeperin.vercel.app/en/books';
  private potterApiChar = 'https://potterapi-fedeperin.vercel.app/en/characters';
  private potterApiHouses = 'https://potterapi-fedeperin.vercel.app/en/houses';
  private potterApiSpells = 'https://potterapi-fedeperin.vercel.app/en/spells/random';

  getBooks() {
    return this.httpClient.get(this.potterApiBooks);
  }
  getChar() {
    return this.httpClient.get(this.potterApiChar);
  }
  getHouses() {
    return this.httpClient.get(this.potterApiHouses);
  }
  getSpells() {
    return this.httpClient.get(this.potterApiSpells);
  }
}
