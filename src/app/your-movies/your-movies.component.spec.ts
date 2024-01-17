import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourMoviesComponent } from './your-movies.component';

describe('YourMoviesComponent', () => {
  let component: YourMoviesComponent;
  let fixture: ComponentFixture<YourMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
