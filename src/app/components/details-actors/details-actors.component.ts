import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent implements OnInit {
  actors:any = []
  constructor(private moviesService:MoviesService){}
  ngOnInit(): void {
    this.loadMovieActors();
  }
  loadMovieActors(){
    this.moviesService.loadMovieActors().subscribe((data:any)=>{
      this.actors = data;
    })
  }
}
