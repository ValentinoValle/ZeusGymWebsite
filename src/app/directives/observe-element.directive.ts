import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core'
import { debounceTime, Observable, Subscription } from 'rxjs'

@Directive({
  selector: '[appObserveElement]',
})
export class ObserveElementDirective implements OnInit, OnDestroy {
  
  @Input() root: HTMLElement | null = null;
  @Input() rootMargin = '0px 0px 0px 0px'
  @Input() threshold = 0;

  @Output() intersection = new EventEmitter<boolean>;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.observeElement();
  }

  ngOnDestroy(): void {
    
  }

  observeElement() {

    const options = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }

    const observer = new IntersectionObserver(entries => {
      this.intersection.emit(entries[0].isIntersecting);
    }, options)
    observer.observe(this.element.nativeElement);
  }
}
