import { trigger, transition, state, animate, style, query, stagger, animateChild, group } from '@angular/animations';

export let fade = trigger('fade',[
    state('void', style({ opacity: 0})),
    transition('void <=> *', [
        animate(2000)
        // group([
        //     query('a.dropdown-item', [
        //         animate(2000)
        //     ]),
        //     query('@fade',
        //     stagger(300, animateChild()))
        // ])
    ])
  ])