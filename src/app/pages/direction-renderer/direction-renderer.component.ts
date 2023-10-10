import { Component } from '@angular/core';
import { MapDirectionsService } from '@angular/google-maps';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-direction-renderer',
  templateUrl: './direction-renderer.component.html',
  styleUrls: ['./direction-renderer.component.scss'],
})
export class DirectionRendererComponent {
  // Coordinates of map center
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  // Zoom level
  zoom = 4;
  // Observable that retrieve direction result
  readonly directionsResults$: Observable<
    google.maps.DirectionsResult | undefined
  >;
  // inject MapDirectionsService
  constructor(mapDirectionsService: MapDirectionsService) {
    // Coordinates of destination and origin of the trip, and travel mode (in this case by car)
    const request: google.maps.DirectionsRequest = {
      destination: {
        lat: 12,
        lng: 4,
      },
      origin: {
        lat: 14,
        lng: 8,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    };

    this.directionsResults$ = mapDirectionsService
      .route(request)
      .pipe(map((response) => response.result));
  }
}
