import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {

}

const options = {
  threshold: 0.5
};

const sections = document.querySelectorAll(".main-section");

const sectionObserver = new IntersectionObserver(function(entries, sectionObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      sectionObserver.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  sectionObserver.observe(section);
});
