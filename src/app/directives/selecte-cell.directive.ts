import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelecteCell]'
})
export class SelecteCellDirective {
  @HostListener('click', ['$event.target'])
    OnClick(event){
    const div = this.renderer.createElement('div');
    const text= this.renderer.createText('!');
    this.renderer.addClass(event, "timeSection")
    this.renderer.appendChild(div,text);
    this.renderer.appendChild(event,div);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
