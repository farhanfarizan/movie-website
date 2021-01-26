import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  textSearch = ""
  movies

  constructor(public httpService:HttpService) { }

  ngOnInit() {
  }

  searchPressed(){
    console.log(this.textSearch)
    this.httpService.getFilm(this.textSearch).subscribe(
      resp => this.movies = resp["Search"],
      err => console.log(err)
    )
  }

}
