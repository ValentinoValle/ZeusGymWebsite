import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { RoutineBuilderComponent } from './routine-builder/routine-builder.component';

const routes: Routes = [
  { path: 'routine', component: RoutineBuilderComponent },
  { path: '', component: MainSectionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
