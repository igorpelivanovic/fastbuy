import { Component, OnInit } from '@angular/core';
import { UnsavedChangeAlertService } from 'src/app/services/unsaved-change-alert.service';

@Component({
  selector: 'app-unsaved-change-alert',
  templateUrl: './unsaved-change-alert.component.html',
  styleUrls: ['./../fullScreenAlert.scss', './unsaved-change-alert.component.scss'],
})
export class UnsavedChangeAlertComponent implements OnInit {

  constructor(private unsavedChangeAlertService: UnsavedChangeAlertService) { }

  ngOnInit(): void {
  }

  canLeave(val: boolean):void{
    this.unsavedChangeAlertService.canLeave = val
  }
 

}
