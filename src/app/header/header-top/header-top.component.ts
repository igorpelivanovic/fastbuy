import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  private icons = {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faHeart: faHeart
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }

}
