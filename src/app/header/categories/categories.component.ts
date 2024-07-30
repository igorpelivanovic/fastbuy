import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AppInitService } from 'src/app/services/app-init.service';
import { Router } from '@angular/router';
import { CategoryOfProducts } from 'src/app/interfaces/category.interface';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [
    trigger("animateAllCategoriesContainer", [
      transition(":enter", [
        style({
          transform: "translateY(-110%)"
        }),
        animate(".3s", style({
          transform: "translateY(0%)"
        }))
      ]),
      transition(":leave", [
        style({
          transform: "translateY(0%)"
        }),
        animate(".3s", style({
          transform: "translateY(-110%)"
        }))
      ])
    ])
  ]
})
export class CategoriesComponent implements OnInit {

  private icons = {
    faBars: faBars,
    faChevronDown: faChevronDown
  }
  showAllCategories: boolean = false

  constructor(private appInit: AppInitService, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  get icon(){
    return this.icons
  }
  get categoriesList(): CategoryOfProducts[]{
    return this.appInit.categoriesList
  }
  handelClickOutside(val: boolean){
    this.showAllCategories = val
  }

}
