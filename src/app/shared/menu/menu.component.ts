import { Component, Input } from '@angular/core';
import { MenuOption } from 'src/app/interfaces/menu-option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menuOptions: MenuOption[] = [];
}
