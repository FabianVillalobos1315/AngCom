import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../services/rutas.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  ruta: any =
  {
    codigoRuta:''
  };

  constructor(dbRutas: RutasService) {

   }
   
   agregar(){

   }

  ngOnInit(): void {
  }

}
