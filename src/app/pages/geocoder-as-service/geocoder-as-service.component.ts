import { Component } from '@angular/core';

import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-geocoder-as-service',
  templateUrl: './geocoder-as-service.component.html',
  styleUrls: ['./geocoder-as-service.component.scss'],
})
export class GeocoderAsServiceComponent {
  constructor(geocoder: MapGeocoder) {
    geocoder
      .geocode({
        address: '1600 Amphitheatre Parkway, Mountain View, CA',
      })
      .subscribe(({ results }) => {
        console.log(results);
      });
  }
}
