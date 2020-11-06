import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThumbnail]'
})
export class ThumbnailDirective {
  // ElementRef class is used to refer to dom with atrribute appThumbnail
  constructor(private el: ElementRef) {
    this.iconScale('24px');
  }

  // resize the icon 
  // event name must be 'mouseenter'
  // method name is random
  @HostListener('mouseenter') onMouseEnter () {
    this.iconScale('32px');
  }

  // back to origin size when mouse leave
  @HostListener('mouseleave') onMouseLeave() {
    this.iconScale('24px');
  }

  private iconScale(size: string) {
    this.el.nativeElement.style.width = size;
    this.el.nativeElement.style.hight = size;
  }

}
