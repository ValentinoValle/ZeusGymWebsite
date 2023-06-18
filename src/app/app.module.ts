import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { GetStartedBtnComponent } from './get-started-btn/get-started-btn.component';
import { RoutineBuilderComponent } from './routine-builder/routine-builder.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipe } from './search-filter.pipe';
import { RoutineTableComponent } from './routine-table/routine-table.component';
import { PremadeRoutinesComponent } from './premade-routines/premade-routines.component';
import { RoutineCardComponent } from './routine-card/routine-card.component';
import { PremadeRoutineInfoComponent } from './premade-routine-info/premade-routine-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MainSectionComponent,
    PageFooterComponent,
    TestimonialComponent,
    TestimonialsSectionComponent,
    GetStartedBtnComponent,
    RoutineBuilderComponent,
    SearchBarComponent,
    SearchFilterPipe,
    RoutineTableComponent,
    PremadeRoutinesComponent,
    RoutineCardComponent,
    PremadeRoutineInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
