import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppName } from 'src/environments/environment';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(`Not Found - ${AppName}`)
  }

}
