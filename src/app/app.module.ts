import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
