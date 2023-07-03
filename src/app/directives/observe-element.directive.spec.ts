import { ObserveElementDirective } from './observe-element.directive';

describe('ObserveElementDirective', () => {
  it('should create an instance', () => {
    
    let elRefMock = {
      nativeElement: document.createElement('div')
    }
    
    const directive = new ObserveElementDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
