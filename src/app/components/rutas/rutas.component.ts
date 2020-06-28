import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../services/rutas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Ruta } from '../../modelos/ruta.model';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  public formAddRuta: FormGroup;
  list: Ruta[];
  rutas: any;

  constructor(private toastr: ToastrService ,private dbRutas: RutasService) {
    this.formAddRuta = this.crearRuta();
    this.dbRutas.listarRutas().subscribe(rt =>{
      this.rutas = rt;
    });
   }

   // Obtener datos de la vista
   get codigoRuta() { return this.formAddRuta.get('codigoRuta'); }
   get nombre() { return this.formAddRuta.get('nombre'); }
   get descripcion() { return this.formAddRuta.get('descripcion'); }

   crearRuta(){
     return new FormGroup({
       codigoRuta: new FormControl(''),
       nombre: new FormControl(''),
       descripcion: new FormControl(''),
     });
   }

   reiniciarFormRuta(): void{
     this.formAddRuta.reset();
   }
   // tslint:disable-next-line: no-trailing-whitespace
   
   agregar(): void{
    this.dbRutas.agregarRuta(this.formAddRuta.value);
    this.reiniciarFormRuta();
    this.toastr.success('Ruta Agregada');
   }

   eliminar(item){
    this.dbRutas.eliminar(item);
    this.toastr.warning('Ruta Eliminado');
  }

  ngOnInit(): void {
  }
  // LAT -33.4560834  LON -70.702907
  /* 
  tabla rutas
  {
    Razon Social:
    Rut:
    Alias:
    Telefono1:
    Telefono2:
    Dirección:
    Comuna:
    Región:
    FK_Ruta: codigoRuta

  }
  */


}
