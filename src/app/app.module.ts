import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { GetStartedBtnComponent } from './get-started-btn/get-started-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MainSectionComponent,
    PageFooterComponent,
    TestimonialComponent,
    TestimonialsSectionComponent,
    GetStartedBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
