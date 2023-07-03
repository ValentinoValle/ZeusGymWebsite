import { Component, ElementRef, Renderer2 } from '@angular/core';
import { fader } from '../../animations/route-animations';


@Component({
  selector: 'app-premade-routines',
  templateUrl: './premade-routines.component.html',
  styleUrls: ['./premade-routines.component.scss'],
  animations: [fader]
})
export class PremadeRoutinesComponent {
  
  constructor(private renderer: Renderer2) { }

  routines = [
    {
      imgSource: "./assets/routineImages/alora-griffiths-AkEr0jc5Lvs-unsplash.jpg",
      attributionName: "Alora Griffiths",
      attributionLink: "https://unsplash.com/@aloragriffiths?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      attributionSite: "Unsplash",
      attributionSiteLink: "https://unsplash.com/photos/AkEr0jc5Lvs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
      name: "Push, Pull, Legs",
      description: "The push, pull, legs routine consists of splitting workouts according to the primary function of the muscles, working upper body pushing, pulling and leg muscles on different days. with this split you have the option of training three or six days a week.",
      btnPath: "premadeRoutineInfo/ppl",
    },
    {
      imgSource: "./assets/routineImages/richard-r--jdfUP2N7Os-unsplash.jpg",
      attributionName: "Richard R",
      attributionLink: "https://unsplash.com/@sepro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      attributionSite: "Unsplash",
      attributionSiteLink: "https://unsplash.com/photos/-jdfUP2N7Os?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
      name: "Upper, Lower",
      description: "In this routine we split the working days into upper body muscles and lower body muscles, can be done two, four or six days a week. This routine is very flexible, can be good for starting and advanced lifters.",
      btnPath: "premadeRoutineInfo/upperlower",
    },
    {
      imgSource: "./assets/routineImages/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg",
      attributionName: "Karsten Winegeart",
      attributionLink: "https://unsplash.com/ko/@karsten116?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      attributionSite: "Unsplash",
      attributionSiteLink: "https://unsplash.com/photos/0Wra5YYVQJE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
      name: "Fullbody",
      description: "This routine is ideal for starting lifter, here we train the full body in each workout, allowing us to have a lot of flexibility. Can be done from two to five days a week, depending on the experience of the lifter.",
      btnPath: "premadeRoutineInfo/fullbody",
    }
  ] 

  isOnView(hasIntersection: boolean, el: HTMLElement) {
    if (hasIntersection) {
      this.renderer.removeClass(el, 'hide')
    };
  }
}
