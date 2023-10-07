import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicComponent } from './basic/basic.component';
import { MarkerComponent } from './marker/marker.component';
import { PolyLineComponent } from './poly-line/poly-line.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { GroundOverlayComponent } from './ground-overlay/ground-overlay.component';
import { KmlLayerComponent } from './kml-layer/kml-layer.component';
import { TrafficLayerComponent } from './traffic-layer/traffic-layer.component';
import { TransientLayerComponent } from './transient-layer/transient-layer.component';
import { BcycleLayerComponent } from './bcycle-layer/bcycle-layer.component';
import { DirectionRendererComponent } from './direction-renderer/direction-renderer.component';
import { HeatMapLayerComponent } from './heat-map-layer/heat-map-layer.component';
import { GeocoderAsServiceComponent } from './geocoder-as-service/geocoder-as-service.component';
import { InfoWindowComponent } from './info-window/info-window.component';
import { PolygonComponent } from './polygon/polygon.component';

const COMPONENTS = [
  BasicComponent,
  MarkerComponent,
  InfoWindowComponent,
  PolyLineComponent,
  PolygonComponent,
  RectangleComponent,
  CircleComponent,
  GroundOverlayComponent,
  KmlLayerComponent,
  TrafficLayerComponent,
  TransientLayerComponent,
  BcycleLayerComponent,
  DirectionRendererComponent,
  HeatMapLayerComponent,
  GeocoderAsServiceComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class PagesModule {}
