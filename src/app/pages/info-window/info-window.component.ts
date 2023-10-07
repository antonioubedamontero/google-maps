import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.scss'],
})
export class InfoWindowComponent {
  // HTML Reference to map info window
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  // Center coordinates of the map
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };

  // Array of markers coordinates
  markerPositions: google.maps.LatLngLiteral[] = [];

  // Level of zoom
  zoom = 4;

  addMarker(event: google.maps.MapMouseEvent) {
    // Adds marker coordinates to marker's array
    if (event.latLng != null) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  openInfoWindow(marker: MapMarker) {
    // Open info window vinculated with selected marker
    if (this.infoWindow != undefined) {
      this.infoWindow.open(marker);
    }
  }
}
