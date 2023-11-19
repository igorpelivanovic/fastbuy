import { animate, query, style, transition, trigger } from "@angular/animations";

export const slideInFromTop = trigger('slideInFromTop', [
    transition(':enter', [
        query('.alertBox', [
            style({
                transform: 'translate(0%, -110%)'
            }),
            animate('.3s ease-in-out', style({
                transform: 'translate(0%, 0%)'
            }))
        ])
    ]),
    transition(':leave', [
        query('.alertBox', [
            style({
                transform: 'translate(0%, 0%)'
            }),
            animate('.3s ease-in-out', style({
                transform: 'translate(0%, -110%)'
            }))
        ])
    ])
])