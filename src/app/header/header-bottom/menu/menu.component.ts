import { animate, style,  transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output} from '@angular/core';
import { faPhone, faEnvelope, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { AppInitService } from 'src/app/services/app-init.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger("menuBg", [
      transition(":enter", [
        style({
          background: "rgba( 0, 0, 0, 0)"
        }),
        animate(".3s", style({
          background: "rgba( 0, 0, 0, 0.5)"
        }))
      ]),
      transition(":leave", [
        style({
          background: "rgba( 0, 0, 0, 0.5)"
        }),
        animate(".3s", style({
            background: "rgba( 0, 0, 0, 0)"
        }))
      ])
    ]),
    trigger("menuContent", [
      transition(":enter", [
        style({
          transform: "translateX(-100%)"
        }),
        animate(".3s", style({
          transform: "translateX(0%)"
        }))
      ]),
      transition(":leave", [
        animate(".3s", style({
          transform: "translateX(-100%)"
        }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit, OnDestroy {
  @Output() closeMenuContainer = new EventEmitter();
  clickDown : boolean = false
  private icons = {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faUser: faUser,
    faHeart: faHeart
  }


  constructor(private appInit: AppInitService, @Inject(DOCUMENT) private document : Document) { }
  ngOnDestroy(): void {
    this.document.body.style.overflow = "visible"
  }
  ngOnInit(): void {
    this.document.body.style.overflow = "hidden"
  }
  get categoriesList(): String[]{
    return this.appInit.categoriesList
  }

  get icon(){
    return this.icons
  }
}
