import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  enteredSearchValue: string;
  
  exercises: Exercise[] = [];
  constructor(private service: ExercisesService) { }

  ngOnInit() {
    this.fetchData("")
  }
  
  onSearchTextChanged(event: any) {
    this.enteredSearchValue = event.target.value;
    this.fetchData(this.enteredSearchValue)
    let bicep = 'biceps'
    console.log(bicep.includes('bicep'));
    
  }

  fetchData(searchText: string) {
    this.service.getExercises(searchText)
      .subscribe({
        next: (data) => this.exercises = data,
        error: (error) => console.log(error.message)        
      });
  }
}
