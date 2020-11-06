import { animate, state, style, transition, trigger } from '@angular/animations';

export const openCloseMenuBtn = trigger('openCloseMenuBtn', [
  state('closed', style({
    background: "url('../../../assets/images/icons/icn_menu_open.png') 30px 15px no-repeat"
  })),
  state('open', style({
    background: "url('../../../assets/images/icons/icn_menu_close.png') 30px 15px no-repeat"
  })),
  transition('closed => open', [
    animate('0s 200ms')
  ]),
  transition('open => closed', [
    animate('0s')
  ])
])

export const openCloseMenu = trigger('openCloseMenu', [
  state('closed', style({
    marginLeft: '-300px',
    opacity: '0',
    visibility: 'hidden'
  })),
  state('open', style({
    marginLeft: '30px',
    opacity: '1',
    visibility: 'visible'
  })),
  transition('closed => open', [
    animate('200ms ease-in-out')
  ]),
  transition('open => closed', [
    animate('200ms ease-in-out')
  ])
])

export const openCloseMenuOverlay = trigger('openCloseMenuOverlay', [
  state('inactive', style({
    opacity: '0',
    visibility: 'hidden'
  })),
  state('active', style({
    opacity: '1',
    visibility: 'visible'
  })),
  transition('inactive => active', [
    animate('200ms ease-in-out')
  ]),
  transition('active => inactive', [
    animate('150ms ease-in-out')
  ])
])
