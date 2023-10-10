import { MenuOption } from '../interfaces/menu-option';

export const OPTION_MENU_DATA: MenuOption[] = [
  { label: 'Basic', page: '/basic', disabled: false },
  { label: 'Marker', page: '/marker', disabled: false },
  { label: 'Info window', page: '/info-window', disabled: false },
  { label: 'Polyline', page: '/poly-line', disabled: false },
  { label: 'Polygon', page: '/polygon', disabled: false },
  { label: 'Map Rectangle', page: '/rectangle', disabled: false },
  { label: 'Circle', page: '/circle', disabled: false },
  { label: 'Ground Overlay', page: '/ground-overlay', disabled: false },
  { label: 'KML layer', page: '/kml-layer', disabled: false },
  { label: 'Traffic Layer', page: '/traffic-layer', disabled: false },
  { label: 'Transit Layer', page: '/transit-layer', disabled: false },
  { label: 'Bicycle layer', page: '/bcycle-layer', disabled: false },
  { label: 'Direction Renderer', page: '/direction-renderer', disabled: true },
  { label: 'Heat Map layer', page: '/heat-map-layer', disabled: true },
  {
    label: 'Map Geocoder as a service',
    page: '/geocoder-as-service',
    disabled: true,
  },
];
