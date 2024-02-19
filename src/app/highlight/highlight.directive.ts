import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[compHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  // ngOnInit() {
  //   // Set background color to pink when the directive initializes
  //   this.el.nativeElement.style.backgroundColor = 'pink';
  // }

  @HostListener('mouseenter') onMouseEnter() {
    // Change background color to yellow when mouse enters the element
    this.el.nativeElement.style.backgroundColor = 'yellow';

  }

  @HostListener('mouseleave') onMouseLeave() {
    // Change background color back to pink when mouse leaves the element
    this.el.nativeElement.style.backgroundColor = null;
  }

}
