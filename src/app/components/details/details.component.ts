import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent
  implements OnInit, OnChanges, AfterContentInit, AfterViewInit
{
  movieId = '';
  stars = []
  genres = []
  actors = []
  constructor(private _activatedRoute: ActivatedRoute, private moviesService:MoviesService) {
    this._activatedRoute.params.subscribe((p)=>{
      this.movieId = p['id'];
      console.log(this.movieId);
      
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called.');
    
  }
  ngOnInit(): void {
    this.loadMovieSummary();
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }
  loadMovieSummary(){
    this.moviesService.loadMovieSummary().subscribe((data:any)=>{
      this.stars = data.stars;
      this.genres = data.genres;
      this.actors = data.actors;
    })
  }
}