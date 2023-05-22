import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  enteredSearchValue: string;

  isSearching: boolean = false;
  isOnFocus: boolean = false;

  exercises: Exercise[] = [];
  constructor(private service: ExercisesService) { }

  ngOnInit() {
    this.fetchData("")
  }

  onFocus() {
    this.isOnFocus = true;
    console.log(this.enteredSearchValue);
    
  }

  onBlur() {
    this.isOnFocus = false;
  }

  addHtml() {
    console.log('hola');
    
  }

  fetchData(searchText: string) {
    this.service.getExercises(searchText)
      .subscribe({
        next: (data) => this.exercises = data,
        error: (error) => console.log(error.message)        
      });
  }
}
