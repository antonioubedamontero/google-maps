import { Component } from '@angular/core';

@Component({
  selector: 'app-heat-map-layer',
  templateUrl: './heat-map-layer.component.html',
  styleUrls: ['./heat-map-layer.component.scss'],
})
export class HeatMapLayerComponent {
  // Coordinates of map center
  center = {
    lat: 37.774546,
    lng: -122.433523,
  };
  // Zoom level
  zoom = 12;

  // radius: It is the radius of influence of each data, in pixels.
  heatmapOptions = {
    radius: 5,
  };
  // Array of coordinates
  heatmapData = [
    {
      lat: 37.782,
      lng: -122.447,
    },
    {
      lat: 37.782,
      lng: -122.445,
    },
    {
      lat: 37.782,
      lng: -122.443,
    },
    {
      lat: 37.782,
      lng: -122.441,
    },
    {
      lat: 37.782,
      lng: -122.439,
    },
    {
      lat: 37.782,
      lng: -122.437,
    },
    {
      lat: 37.782,
      lng: -122.435,
    },
    {
      lat: 37.785,
      lng: -122.447,
    },
    {
      lat: 37.785,
      lng: -122.445,
    },
    {
      lat: 37.785,
      lng: -122.443,
    },
    {
      lat: 37.785,
      lng: -122.441,
    },
    {
      lat: 37.785,
      lng: -122.439,
    },
    {
      lat: 37.785,
      lng: -122.437,
    },
    {
      lat: 37.785,
      lng: -122.435,
    },
  ];
}
