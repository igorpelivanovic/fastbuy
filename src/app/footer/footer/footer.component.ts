import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger("slideInOut",[
      transition(":enter", [
        style({
          opacity: "0",
          transform: "translateX(100%)"
        }),
        animate(".3s", style({
          opacity: "1",
          transform: "translateX(0%)"
        }))
      ]),
      transition(":leave", [
        style({
          opacity: "1",
          transform: "translateX(0%)"
        }),
        animate(".3s", style({
          opacity: "0",
          transform: "translateX(100%)"
        }))
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {

  private icons = {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faChevronUp: faChevronUp
  }
  protected showScrollBtn : boolean = false
  protected date = new Date()

  private scrollTopLimit: number = 100

  constructor(@Inject (DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])
  onScroll():void{
      if(this.document.defaultView?.scrollY != undefined && this.document.defaultView?.scrollY > this.scrollTopLimit){
        this.showScrollBtn = true
        return
      }
      this.showScrollBtn = false
  }

  ngOnInit(): void {
  }
  goToTop():void{
    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  get icon(){
    return this.icons
  }

}
