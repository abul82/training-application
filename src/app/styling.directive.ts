import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyling]'
})
export class StylingDirective {

  constructor() { }

  @HostBinding('style.color') textColor: any;
  @HostBinding('style.background') bgColor: any;
  @HostBinding('style.height') divHeight: any;
  @HostBinding('style.text-align') textAlign: any;
  

  @HostListener('mouseenter') MouseEnter(){
    this.textColor = 'white'
    this.bgColor = 'green'
    // this.divHeight = '70px'
    this.textAlign = 'center'
  }
  @HostListener('mouseleave') MouseLeave(){
    this.textColor = 'white'
    this.bgColor = 'purple'
    // this.divHeight = '70px'
    this.textAlign = 'center'
  }


  @HostListener('click') ClickMethod(){
    this.textColor = 'white'
    this.bgColor = 'blue'
    // this.divHeight = '70px'
    this.textAlign = 'center'
  }

}
