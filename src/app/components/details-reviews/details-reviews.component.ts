import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent implements OnInit {
  movieRates: any[] = []
  constructor(private moviesService:MoviesService){}
  ngOnInit(): void {
    this.loadMovieRates();
  }
  loadMovieRates(){
    this.moviesService.loadMovieRates().subscribe((data:any)=>{
      this.movieRates = data;
    })
  }
}
