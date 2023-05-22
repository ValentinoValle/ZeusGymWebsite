import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from './exercise';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(exercises: Exercise[], filterText: string): any {
   
    let filteredExercises: Exercise [] = [];
    for (let exercise of exercises) {
      if (exercise.name.toLowerCase().includes(filterText) ||
      exercise.category.toLowerCase().includes(filterText) ||
      exercise.primaryMuscles[0].toLowerCase().includes(filterText)) {
        filteredExercises.push(exercise);
      } 
    }
    return filteredExercises;
  }
}
