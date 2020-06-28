import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatInputModule} from '@angular/material/input';
import { Producto } from '../../producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public formAddProductos: FormGroup;
  list: Producto[];
  productos: any;
  editarProducto: any = {descripcion: ''};

  constructor(private toastr: ToastrService, private dbData: DataService) {
    this.formAddProductos = this.crearProducto();
    this.dbData.obtenerProductos().subscribe(prod => {
      this.productos = prod;
    });
   }

   // Obtener datos de la vista
   get codProducto() { return this.formAddProductos.get('codProducto'); }
   get descripcion() { return this.formAddProductos.get('descripcion'); }
   get cantidad() { return this.formAddProductos.get('cantidad'); }

   crearProducto(){
    return new FormGroup({
      codProducto: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      cantidad: new FormControl(''),
    });
  }

  reiniciarFormProducto(): void {
    this.formAddProductos.reset();
  }

  agregarProductos(): void {
    if(this.formAddProductos.valid){
      this.dbData.guardarProducto(this.formAddProductos.value);
      this.reiniciarFormProducto();
      console.log('Producto Guardaro');
      this.toastr.success('Producto Guardado');
    }
  }

  eliminar(item){
    this.dbData.eliminar(item);
    this.toastr.warning('Producto Eliminado');
  }

  editar(item){
    this.editarProducto='Hola';
  }

  ngOnInit() {
  }

}
