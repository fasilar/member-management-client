import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Menus } from '../../constants/shared.constant';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  menus : Menu[] = Menus;
  
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}


