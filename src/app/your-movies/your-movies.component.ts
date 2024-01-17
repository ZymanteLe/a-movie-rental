import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { YourMovieList } from './your-movies';
import { YourMovieListService } from '../services/your-movie-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-your-movies',
  standalone: true,
  templateUrl: './your-movies.component.html',
  styleUrl: './your-movies.component.css',
  imports: [NavBarComponent, FooterComponent, CommonModule],
})
export class YourMoviesComponent implements OnInit {
  yourMovieList: YourMovieList[] = [];
  constructor(private yourMovieService: YourMovieListService) {}
  ngOnInit(): void {
    this.yourMovieList = this.yourMovieService.getYourMovies();
  }
}
