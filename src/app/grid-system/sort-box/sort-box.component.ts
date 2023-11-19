import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { SortBoxService } from 'src/app/services/sort-box.service';

@Component({
  selector: 'app-sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.scss']
})
export class SortBoxComponent implements OnInit {

  protected sortBoxShow : boolean = false
  formSort !: FormGroup
  private icons = {
    faChevronDown: faChevronDown
  }

  constructor(private formBuilder: FormBuilder, private sortBoxService: SortBoxService) { }

  get icon(){
    return this.icons
  }
  get currentValue(){
    return this.sortBoxService.currentOption
  }
  set currentValue(val){
    this.sortBoxService.currentOption = val
  }
  get options(){
    return this.sortBoxService.options
  }
  ngOnInit(): void {
    this.formSort = this.formBuilder.group({
      sort: new FormControl(this.currentValue.value)
    })
    this.formSort.valueChanges.subscribe((val)=>{
      this.sortBoxService.currentOption = val.sort
    })
  }
  handlerOutside(val:any){
    this.sortBoxShow = val
  }
}
