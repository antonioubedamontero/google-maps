import { MenuOption } from '../interfaces/menu-option';

export const OPTION_MENU_DATA: MenuOption[] = [
  { label: 'Basic', page: '/basic', disabled: false },
  { label: 'Marker', page: '/marker', disabled: false },
  { label: 'Info window', page: '/info-window', disabled: false },
  { label: 'Polyline', page: '/poly-line', disabled: false },
  { label: 'Polygon', page: '/polygon', disabled: false },
  { label: 'Map Rectangle', page: '/rectangle', disabled: true },
  { label: 'Circle', page: '/circle', disabled: true },
  { label: 'Ground Overlay', page: '/ground-overlay', disabled: true },
  { label: 'KML layer', page: '/kml-layer', disabled: true },
  { label: 'Traffic Layer', page: '/traffic-layer', disabled: true },
  { label: 'Transient Layer', page: '/transient-layer', disabled: true },
  { label: 'Bicycle layer', page: '/bcycle-layer', disabled: true },
  { label: 'Direction Renderer', page: '/direction-renderer', disabled: true },
  { label: 'Heat Map layer', page: '/heat-map-layer', disabled: true },
  {
    label: 'Map Geocoder as a service',
    page: '/geocoder-as-service',
    disabled: true,
  },
];
