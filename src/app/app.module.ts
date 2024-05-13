import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { AppRoutesModule } from './modules/app.routes';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    DetailsActorsComponent,
    NotFoundComponent,
    //Pipes
    ProfitPipe,
    HeaderDirective,
    MyIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MoviesService, {provide: ErrorHandler, useClass: GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
