import { Injectable } from '@angular/core';
import { MovieList } from '../home/home-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movieList: MovieList[] = [
    {
      name: "The Shawshank Redemption",
      genre: "Drama",
      rentalPrice: 2.99,
      stockCount: 10,
    },
    {
      name: "The Godfather",
      genre: "Crime",
      rentalPrice: 3.49,
      stockCount: 8,
    },
    {
      name: "The Dark Knight",
      genre: "Action",
      rentalPrice: 3.99,
      stockCount: 1,
    },
    {
      name: "Pulp Fiction",
      genre: "Crime",
      rentalPrice: 2.79,
      stockCount: 15,
    },
    {
      name: "Forrest Gump",
      genre: "Drama",
      rentalPrice: 2.49,
      stockCount: 0,
    },
    {
      name: "Inception",
      genre: "Sci-Fi",
      rentalPrice: 4.29,
      stockCount: 9,
    },
    {
      name: "The Matrix",
      genre: "Sci-Fi",
      rentalPrice: 3.79,
      stockCount: 11,
    },
    {
      name: "Jurassic Park",
      genre: "Adventure",
      rentalPrice: 2.89,
      stockCount: 14,
    }
  ]

  constructor() { }

  getMovies() {
    return this.movieList
  }
}
