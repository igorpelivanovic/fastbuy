import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronDown, faCheck, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FilterBoxService } from 'src/app/services/filter-box.service';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
  animations: [
    trigger("openClose", [
      state("open", style({
        maxHeight: "200px",
        overflowY: "scroll"
      })),
      state("close", style({
        maxHeight: "0px",
        overflowY: "hidden"
      })),
      transition("open => close", [
        animate(".3s", style({maxHeight: "0px",}))
      ]),
      transition("close => open", [
        animate(".3s", style({maxHeight: "200px",}))
      ])
    ])
  ]
})
export class FilterBoxComponent implements OnInit {

  protected form !: FormGroup
  private icons = {
    faChevronDown: faChevronDown,
    faCheck: faCheck,
    faArrowsRotate: faArrowsRotate
  }
  openPrice: boolean = true
  openBrand : boolean = false
  openRating: boolean = true

  @ViewChildren("inputRanges") inputPrice !: QueryList<ElementRef>

  constructor(private formBuilder : FormBuilder, private filterBoxService: FilterBoxService, @Inject(DOCUMENT) private document: Document) { }

  get icon(){
    return this.icons
  }
  get filterBoxServ(){
    return this.filterBoxService
  }
  get brands(){
    return this.form.get("brands") as FormArray
  }
  get minPrice(){
    return this.form.get("minPrice") as FormControl
  }
  get maxPrice(){
    return this.form.get("maxPrice") as FormControl
  }
  get minRating(){
    return this.form.get("minRating") as FormControl
  }
  get maxRating(){
    return this.form.get("maxRating") as FormControl
  }
  get filterOptions(){
    return this.filterBoxService.options
  }
  get defaultData(){
    return this.filterBoxService.default
  }
  get currentData(){
    return this.filterBoxService.current
  }
  get max(){
    return this.filterOptions.price.max
  }
  setDefPrice(){
    this.form.patchValue({
      minPrice: this.defaultData.price.min,
      maxPrice: this.defaultData.price.max
    })
  }
  
  ngOnInit(): void {
    this.initForm()
  }
  initForm():void{
    this.form = this.formBuilder.group({
      brands: this.formBuilder.array(this.defaultData.brands),
      minPrice: new FormControl(this.defaultData.price.min),
      maxPrice: new FormControl(this.defaultData.price.max),
      minRating: new FormControl(this.defaultData.rating.min),
      maxRating: new FormControl(this.defaultData.rating.max),
    })

    
    this.filterBoxServ.subjBrand.subscribe(()=>{
      this.brands.controls.map((controls, index)=>{
        controls.setValue(this.defaultData.brands[index])
      })
    })
    this.filterBoxServ.updateVal.subscribe(()=>{
      this.inputPrice.map(el=>{
        el.nativeElement.min = this.filterOptions.price.min
        el.nativeElement.max = this.filterOptions.price.max
      })
      this.setDefPrice()
      this.currentData.brands.map(el=> this.brands.push(new FormControl(el)))
      this.form.valueChanges.subscribe(val=>this.filterBoxService.addValues(val))

    })
    this.filterBoxServ.subjPrice.subscribe(()=>{
      this.setDefPrice()
    })

    this.filterBoxServ.subjRating.subscribe(()=>{
      this.form.patchValue({
        minRating: this.defaultData.rating.min,
        maxRating: this.defaultData.rating.max
      })
    })
  }
  generateBgRange(range: { min: number; max: number; }, valueMin: number, valueMax: number):string{
    let start = (valueMin - range.min) / ((range.max - range.min) / 100)
    let end = (valueMax - range.min) / ((range.max - range.min) / 100)
    return `linear-gradient(90deg, #bebebe ${start}%, #151b33 ${start}%, #151b33 ${end}%, #bebebe ${end}%`
  }
  clearForm(){
    this.form.reset({
      minPrice: this.defaultData.price.min,
      maxPrice: this.defaultData.price.max,
      minRating: this.defaultData.rating.min,
      maxRating: this.defaultData.rating.max,
    })
    this.brands.controls.map((controls, index)=>{
        controls.setValue(this.defaultData.brands[index])
    })
  }
  @HostListener("window:resize", [])
  onResize(){
    if(this.document.defaultView?.innerWidth != undefined && this.document.defaultView?.innerWidth < 992){
      this.filterBoxServ.showFilterBox = false
      this.document.body.style.overflow = "visible"
    }
    
  }
}

