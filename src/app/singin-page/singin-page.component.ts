import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../services/account.service';
import { userLoginData, usersListResponse } from '../interfaces/account';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-singin-page',
  templateUrl: './singin-page.component.html',
  styleUrls: ['./singin-page.component.scss'],
  animations: [
    trigger("sliderFormContainer", [
      transition("false=>true",[ 
        group([
          query(".navigationContainer", animateChild()),
          query(":enter", [
            style({
              transform: "translateX(-100%)"
            }),
            animate(".25s .25s ease-in-out", style({
              transform: "translateX(0%)"
            }))
          ]),
          query(":leave", [
            style({
              transform: "translateX(0%)"
            }),
            animate(".25s ease-in-out", style({
              transform: "translateX(100%)"
            }))
          ]),
          animate(".5s ease-in-out"),
        ])
        
      ]),
      transition("true=>false",[ 
        animateChild(),
        group([
          query(".navigationContainer", animateChild()),
          query(":enter", [
            style({
              transform: "translateX(100%)"
            }),
            animate(".25s .25s ease-in-out", style({
              transform: "translateX(0%)"
            }))
          ]),
          query(":leave", [
            animateChild(),

            style({
              transform: "translateX(0%)"
            }),
            animate(".25s ease-in-out", style({
              transform: "translateX(-100%)"
            }))
          ]),
          animate(".5s ease-in-out"),
        ])
      ])
    ]),
    trigger("slideNavigation", [
      state("true", style({
        left: "100%",
        transform: "translateX(-100%)",
      })),
      state("false", style({
        left: "0%",
        transform: "translateX(0%)",
      })),
      transition("true=>false", group([
        query(":enter", [
          style({
            transform: "translateX(-100%)"
          }),
          animate(".25s .25s ease-in-out", style({
            transform: "translateX(0%)"
          }))
        ]),
        query(":leave", [
          style({
            transform: "translateX(0%)"
          }),
          animate(".25s ease-in-out", style({
            transform: "translateX(100%)"
          }))
        ]),
        animate(".5s ease-in-out"),
      ])
      ),
      transition("false=>true",group([
        query(":enter", [
          style({
            transform: "translateX(100%)"
          }),
          animate(".25s .25s ease-in-out", style({
            transform: "translateX(0%)"
          }))
        ]),
        query(":leave", [
          style({
            transform: "translateX(0%)"
          }),
          animate(".25s ease-in-out", 
            style({
              transform: "translateX(-100%)"
            }))
          ]),
          animate(".5s ease-in-out"),
        ])
      )
    ])
  ]
})
export class SinginPageComponent implements OnInit, OnDestroy{

  
  protected singInRender : boolean = true

  protected requestIsSended: boolean = false

  protected hasListUsers: boolean = false

  protected usersList : userLoginData[] = []

  private userListSubscription !: Subscription

  private icons = {
    faRightToBracket: faRightToBracket
  }
  
  constructor(private accountService: AccountService) { }
  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe()
  }
  

  get icon(){
    return this.icons
  }

  ngOnInit(): void {
    this.getUsersList()
  }

  toggleFormRender(): void{
    if(this.requestIsSended) return
    this.singInRender = !this.singInRender
  }

  set requestStatus(event: boolean){
    this.requestIsSended = event
  }

  private getUsersList(): void{
    this.userListSubscription = this.accountService.getUsersList().subscribe({
      next: (data)=>{
        this.usersList.push(...data.users)
        this.hasListUsers = true
      }
    })
  }
  

}
