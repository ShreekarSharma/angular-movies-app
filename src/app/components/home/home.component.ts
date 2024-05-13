import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isActive = false;
  topMovies: any[] = [];
  fanFavoriteMovies: any[] = [];
  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }
  getFanFavoriteMovies(){
    this.httpClient.get<any[]>('../../../assets/data/fanFavoriteMovies.json').subscribe((data:any[])=>{
      this.fanFavoriteMovies = data;
      
    })
  }
  getTopMovies(){
    this.httpClient.get<any[]>('../../../assets/data/topMovies.json').subscribe((data:any[])=>{
      this.topMovies = data;
    })
  }
}
