import { Injectable } from '@angular/core';
import { YourMovieList } from '../your-movies/your-movies';

@Injectable({
  providedIn: 'root'
})
export class YourMovieListService {

  yourMovieList: YourMovieList[] = [
    {
      name: "The Shawshank Redemption",
      genre: "Drama",
      time: 12,
      rentalPrice: 2.99,
    },
    {
      name: "The Godfather",
      genre: "Crime",
      time: 12,
      rentalPrice: 3.49,
    },
  ]

  constructor() { }

  getYourMovies () {
    return this.yourMovieList
  }
}
