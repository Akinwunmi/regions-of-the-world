import { Component, OnInit } from '@angular/core';
// animations
import { openCloseMenuBtn, openCloseMenu, openCloseMenuOverlay } from '../animations/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    openCloseMenuBtn,
    openCloseMenu,
    openCloseMenuOverlay
  ],
  host: {
    "(window: click)": "closeMenu()"
  }
})
export class NavbarComponent implements OnInit {
  showMenu: string = 'closed';
  showOverlay: string = 'inactive';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu($event) {
    $event.stopPropagation();
    this.showMenu = this.showMenu === 'closed' ? 'open' : 'closed';
    this.showOverlay = this.showOverlay === 'inactive' ? 'active' : 'inactive';
  }
  closeMenu() {
    this.showMenu = 'closed';
    this.showOverlay = 'inactive';
  }
}
