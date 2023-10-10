import { Component } from '@angular/core';

@Component({
  selector: 'app-bcycle-layer',
  templateUrl: './bcycle-layer.component.html',
  styleUrls: ['./bcycle-layer.component.scss'],
})
export class BcycleLayerComponent {
  // Map center coordinates
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Zoom level
  zoom = 4;
}
