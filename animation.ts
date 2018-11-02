import { trigger, transition, state, animate, style, query, stagger, animateChild, group } from '@angular/animations';

export let fadeTrigger = trigger('expandCollapse', [
    state('collapsedState', style({ 
      height:0,
      opacity:0,
      paddingTop: 0,
      paddingBottom: 0,
      overflow:'hidden',
    })),
    state('expandedState', style({ 
      height:"*",
      opacity:1,
    })),
    transition('collapsedState => expandedState', [
      animate(300)
    ]),
    transition('expandedState => collapsedState', [
      animate(200)
    ]),
  ])