import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { RoutineBuilderComponent } from './routine-builder/routine-builder.component';
import { PremadeRoutinesComponent } from './premade-routines/premade-routines.component';
import { PremadeRoutineInfoComponent } from './premade-routine-info/premade-routine-info.component';

const routes: Routes = [
  { 
  path: 'premadeRoutines', 
  component: PremadeRoutinesComponent,
  children: [
    { path: 'premadeRoutineInfo/:routine', component: PremadeRoutineInfoComponent }
    ],
  },
  { path: 'routineBuilder', component: RoutineBuilderComponent },
  { path: '', component: MainSectionComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
