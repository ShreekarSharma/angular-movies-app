import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) {}
  getFanFavoriteMovies() {
    return this.httpClient
      .get<any[]>('../../../assets/data/fanFavoriteMovies.json');
  }
  getTopMovies() {
    return this.httpClient
      .get<any[]>('../../../assets/data/topMovies.json');
  }
  loadMovieSummary(){
    return this.httpClient.get<any>('../../../assets/data/movieSummary.json');
  }
  loadMovieActors(){
    return this.httpClient.get('../../../assets/data/movieActors.json');
  }
  loadSimilarMovies(){
    return this.httpClient.get('../../../assets/data/similarMovies.json');
  }
  loadMovieRates(){
    return this.httpClient.get('../../../assets/data/movieRates.json');
  }
  searchMovies(){
    return this.httpClient.get<any[]>('../../../assets/data/movieSearch.json');
  }
}
