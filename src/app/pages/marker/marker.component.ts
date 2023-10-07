import { Component } from '@angular/core';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss'],
})
export class MarkerComponent {
  // Map center coordinates
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };

  // Zoom level
  zoom = 4;

  // Options of marker
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  // Marker positions
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    // Add marker coordinates to marker's array
    if (event.latLng != null) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }
}
