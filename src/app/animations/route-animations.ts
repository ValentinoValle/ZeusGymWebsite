import { state, style, animate, trigger, transition, useAnimation, query } from '@angular/animations';

export const fader = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter', [
                style({
                    opacity: 0,
                }),
            ], { optional: true }),
            query(':enter', [
                animate('0.6s ease', style({ opacity: 1 }))
            ], { optional: true }),
        ]),
    ]);

