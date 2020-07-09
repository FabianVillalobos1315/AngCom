import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

    mapbox = (mapboxgl as typeof mapboxgl);
    map: mapboxgl.Map;
    style = `mapbox://styles/mapbox/streets-v11`;
    // Centro de mapa
    lat = -33.4561949;
    lng = -70.7021188;
    zoom = 15;

  constructor() { 
    // Asignación de la localización donde se centrará el mapa
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container: 'mapa-mapbox',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  agregarMarker(lng, lat){
    let marker = new mapboxgl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(this.map)
  }
  
}
