import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [MatCardModule, GoogleMapsModule],
})
export class CoreModule {}
