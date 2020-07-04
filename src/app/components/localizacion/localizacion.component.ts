import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl';

Object.getOwnPropertyDescriptor(Mapboxgl, "accessToken").set(environment.mapBoxToken);
// Mapboxgl.accessToken = environment.mapBoxToken;

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.css']
})
export class LocalizacionComponent implements OnInit {

  mapa: Mapboxgl.Map;

  ngOnInit(){


    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.7021188,-33.4561949], // starting position // ,-70.7021188,-33.4561949 // Longitud - Latitud
      zoom: 15 // starting zoom
    });

    let marker = new Mapboxgl.Marker()
    .setLngLat([-70.7021188,-33.4561949])
    .addTo(this.mapa)

    let markerB = new Mapboxgl.Marker()
    .setLngLat([-70.7002359, -33.4538094]) // -70.699045,-33.4538363  // -70.7002359, -33.4538094
    .addTo(this.mapa)

  }

}
