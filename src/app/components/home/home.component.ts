import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isActive = false;
  topMovies: any[] = [];
  fanFavoriteMovies: any[] = [];
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }
  getFanFavoriteMovies() {
    this.moviesService.getFanFavoriteMovies().subscribe({
      next: (data: any[]) => {
        this.fanFavoriteMovies = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Request Successfull');
      },
    });
  }
  getTopMovies() {
    this.moviesService.getTopMovies().subscribe({
      next: (data: any[]) => {
        this.topMovies = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Request Successfull');
      },
    });
  }
}
function of(arg0: null): any {
  throw new Error('Function not implemented.');
}
