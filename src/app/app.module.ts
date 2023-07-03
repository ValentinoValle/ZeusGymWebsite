import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { GetStartedBtnComponent } from './components/get-started-btn/get-started-btn.component';
import { RoutineBuilderComponent } from './components/routine-builder/routine-builder.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RoutineTableComponent } from './components/routine-table/routine-table.component';
import { PremadeRoutinesComponent } from './components/premade-routines/premade-routines.component';
import { RoutineCardComponent } from './components/routine-card/routine-card.component';
import { PremadeRoutineInfoComponent } from './components/premade-routine-info/premade-routine-info.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

import { SearchFilterPipe } from './pipes/searchFilter/search-filter.pipe';
import { ObserveElementDirective } from './directives/observe-element.directive';

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
    PremadeRoutineInfoComponent,
    AboutUsComponent,
    ContactComponent,
    ObserveElementDirective
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
