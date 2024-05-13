import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent implements OnInit {
  movieRates: any[] = []
  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.loadMovieRates();
  }
  loadMovieRates(){
    this.httpClient.get('../../../assets/data/movieRates.json').subscribe((data:any)=>{
      this.movieRates = data;
    })
  }
}
