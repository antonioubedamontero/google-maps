import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './pages/basic/basic.component';
import { MarkerComponent } from './pages/marker/marker.component';
import { InfoWindowComponent } from './pages/info-window/info-window.component';
import { PolyLineComponent } from './pages/poly-line/poly-line.component';
import { RectangleComponent } from './pages/rectangle/rectangle.component';
import { CircleComponent } from './pages/circle/circle.component';
import { GroundOverlayComponent } from './pages/ground-overlay/ground-overlay.component';
import { KmlLayerComponent } from './pages/kml-layer/kml-layer.component';
import { TrafficLayerComponent } from './pages/traffic-layer/traffic-layer.component';
import { TransientLayerComponent } from './pages/transient-layer/transient-layer.component';
import { BcycleLayerComponent } from './pages/bcycle-layer/bcycle-layer.component';
import { DirectionRendererComponent } from './pages/direction-renderer/direction-renderer.component';
import { HeatMapLayerComponent } from './pages/heat-map-layer/heat-map-layer.component';
import { GeocoderAsServiceComponent } from './pages/geocoder-as-service/geocoder-as-service.component';
import { PolygonComponent } from './pages/polygon/polygon.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic' },
  { path: 'basic', component: BasicComponent },
  { path: 'marker', component: MarkerComponent },
  { path: 'info-window', component: InfoWindowComponent },
  { path: 'poly-line', component: PolyLineComponent },
  { path: 'polygon', component: PolygonComponent },
  { path: 'rectangle', component: RectangleComponent },
  { path: 'circle', component: CircleComponent },
  { path: 'ground-overlay', component: GroundOverlayComponent },
  { path: 'kml-layer', component: KmlLayerComponent },
  { path: 'traffic-layer', component: TrafficLayerComponent },
  { path: 'transit-layer', component: TransientLayerComponent },
  { path: 'bcycle-layer', component: BcycleLayerComponent },
  { path: 'direction-renderer', component: DirectionRendererComponent },
  { path: 'heat-map-layer', component: HeatMapLayerComponent },
  { path: 'geocoder-as-service', component: GeocoderAsServiceComponent },
  { path: '**', redirectTo: 'basic' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
