import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../services/rutas.service';


@Component({
  selector: 'app-lista-rutas',
  templateUrl: './lista-rutas.component.html',
  styleUrls: ['./lista-rutas.component.css']
})
export class ListaRutasComponent implements OnInit {

  rutas: any;

  constructor(private conexion: RutasService) { 
    this.conexion.listarRutas().subscribe(item =>{
      this.rutas = item;
    });
  }

  ngOnInit(): void {
  }

}
