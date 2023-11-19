import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input("curentRating") curentRating !: number 
  @Input("maxRating") maxRating : number = 5

  private icons = {
    faStar: faStar,
    faSquareFull: faSquareFull
  }

  constructor() { }

  ngOnInit(): void {
  }
  get icon(){
    return this.icons
  }
  get MaxRating(){
    return Array(this.maxRating)
  }

}
