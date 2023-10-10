import { Component } from '@angular/core';

@Component({
  selector: 'app-transient-layer',
  templateUrl: './transient-layer.component.html',
  styleUrls: ['./transient-layer.component.scss'],
})
export class TransientLayerComponent {
  // Map center coordinates
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Zoom level
  zoom = 4;
}
