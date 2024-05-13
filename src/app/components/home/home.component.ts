import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isActive = false;
  topMovies: any[] = [];
  fanFavoriteMovies: any[] = [];
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }
  // getFanFavoriteMovies() {
  //   this.httpClient
  //     .get<any[]>('../../../assets/data/fanFavoriteMovies.json')
  //     .pipe(
  //       catchError((error)=>{console.log(error);
  //         return of(null);
  //       })).subscribe((data:any)=>{
  //         if (data) {
  //           this.fanFavoriteMovies = data
  //         } else{
  //           this.fanFavoriteMovies = []
  //         }
  //       });
  // }
  getFanFavoriteMovies() {
    this.httpClient
      .get<any[]>('../../../assets/data/fanFavoriteMovies.json')
      .subscribe({
        next: (data: any[]) => {
          this.fanFavoriteMovies = data;
        },
        error: (error)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log('Request Successfull');
        }
      });
  }
  getTopMovies() {
    this.httpClient
      .get<any[]>('../../../assets/data/topMovies.json')
      .subscribe({
        next:(data: any[]) => {
          this.topMovies = data;
        },
        error:(error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log('Request Successfull');
        }
      });
  }
}
function of(arg0: null): any {
  throw new Error('Function not implemented.');
}

