import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient:HttpClient) { }

  getFilm(searchText:String){
    return this.httpClient.get(`http://www.omdbapi.com/?s=${searchText}&apikey=87d10179`)
  }
}
