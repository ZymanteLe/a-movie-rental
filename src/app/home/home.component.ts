import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieList } from './home-movies';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavBarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movieList: MovieList[] = [];
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.movieList = this.moviesService.getMovies();
  }
}
