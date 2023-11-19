import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss']
})
export class NoResultsComponent implements OnInit {

  private icons = {
    faMagnifyingGlass: faMagnifyingGlass
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }

}
