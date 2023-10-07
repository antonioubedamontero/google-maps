import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { CoreModule } from '../core/core.module';

const COMPONENTS = [MenuComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, CoreModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
