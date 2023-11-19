import { animate, query, style, transition, trigger } from "@angular/animations";

export const transformYInOut = trigger('transformYInOut', [
    transition(':enter', [
        query('.alertBox', [
            style({
                transform: 'translateY(-50px)'
            }),
            animate('400ms', style({
                transform: 'translateY(0px)'
            }))
        ])
    ]),
    transition(':leave', [
        query('.alertBox', [
            style({
                transform: 'translateY(0px)'
            }),
            animate('200ms', style({
                transform: 'translateY(-50px)'
            }))
        ])
    ])
])