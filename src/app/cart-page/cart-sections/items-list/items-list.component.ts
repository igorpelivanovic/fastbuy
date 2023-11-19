import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { cartListElement } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @Input() arrayForm !: FormArray

  private icons = {
    faMinus: faMinus,
    faPlus: faPlus,
    faTrash: faTrash
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  get cartListItems(): cartListElement[]{
    return this.cartService.data
  }

  get countOfItems(): number{
    return this.cartListItems.length
  }

  get icon(){
    return this.icons
  }

  getCartItemFromId(id: number): cartListElement{
    return this.cartService.getDataFormId(id) as cartListElement
  }

  getItemsArrFromControl(index: number): FormGroup{
    return this.arrayForm.controls[index] as FormGroup
  }

  incrementQuanity(index: number): void{
    this.getItemsArrFromControl(index).patchValue({quanity: this.getItemsArrFromControl(index).value.quanity+1})
    this.cartService.updateValue(this.cartListItems[index].id, this.getItemsArrFromControl(index).value.quanity)
  }

  decrementQuanity(index: number): void{
    if(this.getItemsArrFromControl(index).value.quanity <= 1) return
    this.getItemsArrFromControl(index).patchValue({quanity: this.getItemsArrFromControl(index).value.quanity-1})
    this.cartService.updateValue(this.cartListItems[index].id, this.getItemsArrFromControl(index).value.quanity)
  }

  removeProduct(index: number): void{
    this.arrayForm.removeAt(index)
    this.cartService.removeData(this.cartListItems[index].id)
  }

}
