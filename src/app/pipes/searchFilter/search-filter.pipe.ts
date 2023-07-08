import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from '../../interfaces/exercise';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(exercises: Exercise[], filterText: string): any {
   
    let filteredExercises: Exercise [] = [];
    for (let exercise of exercises) {
      if (exercise.name.toLowerCase().includes(filterText.toLowerCase()) ||
      exercise.category.toLowerCase().includes(filterText.toLowerCase()) ||
      exercise.primaryMuscles[0].toLowerCase().includes(filterText.toLowerCase())) {
        filteredExercises.push(exercise);
      } 
    }
    return filteredExercises;
  }
}
