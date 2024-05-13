import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  movieTitle='';
  searchResult:any[] = []
  constructor(private activatedRoute:ActivatedRoute, private moviesService: MoviesService){
    this.activatedRoute.params.subscribe((p)=>{
      this.movieTitle = p['movieTitle'];
    })
  }
  ngOnInit(): void {
    this.searchMovies();
  }
  searchMovies(){
    this.moviesService.searchMovies().subscribe((data)=>{
      this.searchResult = data;
    })
  }
}
