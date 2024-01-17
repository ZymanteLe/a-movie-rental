import { TestBed } from '@angular/core/testing';

import { YourMovieListService } from './your-movie-list.service';

describe('YourMovieListService', () => {
  let service: YourMovieListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourMovieListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
