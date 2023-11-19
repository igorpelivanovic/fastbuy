import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-item',
  templateUrl: './no-item.component.html',
  styleUrls: ['./no-item.component.scss']
})
export class NoItemComponent implements OnInit {

  private icons = {
    faShoppingCart: faShoppingCart
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }

}
