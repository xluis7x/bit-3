import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Api {
  constructor() {}
  private httpClient = inject(HttpClient)

}
