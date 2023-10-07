import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  // Point where mouse is hover (coordinates)
  display: any;

  // Center of map (coordinates)
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Map zoom
  zoom = 4;

  moveMap(event: google.maps.MapMouseEvent) {
    // NOTE: event.langLng is a function
    // console.log('** map has been moved with event.latLng', event.latLng);
    if (event.latLng != null) {
      this.center = event.latLng.toJSON();
    }
  }
  move(event: google.maps.MapMouseEvent) {
    // NOTE: event.langLng is a function
    // console.log(
    //   '** mouse has been moved with event.latLng coordinates',
    //   event.latLng
    // );
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }
}
