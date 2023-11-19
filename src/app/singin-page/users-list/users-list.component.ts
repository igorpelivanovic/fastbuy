import { Component, Input, OnInit } from '@angular/core';
import { userLoginData } from 'src/app/interfaces/account';
import { faUsers, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() usersList : userLoginData[] = []

  private icons = {
    faUsers: faUsers,
    faUser: faUser,
    faLock: faLock
  }

  protected renderList: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this.icons
  }
  toggle(): void{
    this.renderList = !this.renderList
  }

}
