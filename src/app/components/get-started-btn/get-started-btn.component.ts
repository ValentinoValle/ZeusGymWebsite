import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-get-started-btn',
  templateUrl: './get-started-btn.component.html',
  styleUrls: ['./get-started-btn.component.scss']
})
export class GetStartedBtnComponent {
  @Input() btnText: string;

  @Input() path: string;
}
