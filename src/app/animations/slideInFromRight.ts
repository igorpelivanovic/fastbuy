import { animate, style, transition, trigger } from "@angular/animations";

export const slideInFromRight = trigger('slideInFromRight', [
    transition(':enter', [
        style({
            transform: 'translateX(100%)'
        }),
        animate('.3s ease-in-out', style({
            transform: 'translateX(0%)'
        }))
    ]),
    transition(':leave', [
        style({
            transform: 'translateX(0%)'
        }),
        animate('.3s ease-in-out', style({
            transform: 'translateX(100%)'
        }))
    ])
])