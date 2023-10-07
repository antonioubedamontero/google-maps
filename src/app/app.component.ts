import { Component, OnInit } from '@angular/core';
import { MenuOption } from './interfaces/menu-option';
import { OPTION_MENU_DATA } from './constants/option-menu-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOptions: MenuOption[] = [];

  ngOnInit(): void {
    // Load menu options
    this.menuOptions = OPTION_MENU_DATA;
  }
}
