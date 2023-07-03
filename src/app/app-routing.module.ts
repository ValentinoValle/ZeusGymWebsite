import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { RoutineBuilderComponent } from './components/routine-builder/routine-builder.component';
import { PremadeRoutinesComponent } from './components/premade-routines/premade-routines.component';
import { PremadeRoutineInfoComponent } from './components/premade-routine-info/premade-routine-info.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { 
  path: 'premadeRoutines', 
  component: PremadeRoutinesComponent,
  children: [
    { path: 'premadeRoutineInfo/:routine', component: PremadeRoutineInfoComponent }
    ],
  },
  { path: 'routineBuilder', component: RoutineBuilderComponent },
  { 
  path: 'aboutUs',
  component: AboutUsComponent,
  children: [
    { path: 'contact', component: ContactComponent }
  ]
  },
  { path: 'contact', component: ContactComponent }, 
  { path: '', component: MainSectionComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
