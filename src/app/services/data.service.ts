import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Producto } from '../modelos/producto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  formData: Producto;

  private contactCollection: AngularFirestoreCollection<any>;
  private productoCollection: AngularFirestoreCollection<Producto>;
  productos: Observable<Producto[]>;
  private productoDoc: AngularFirestoreDocument<Producto>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<any>('contactos');

    this.productoCollection = afs.collection<Producto>('productos');
    this.productos = this.productoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   guardarContacto(nuevoContacto: any): void {
    this.contactCollection.add(nuevoContacto);
   }


   guardarProducto(nuevoProducto: Producto): void {
    this.productoCollection.add(nuevoProducto);
   }

   obtenerProductos(){
    return this.productos;
   }

   eliminar(item){
    this.productoDoc = this.afs.doc<Producto>('productos/'+item.id);
    this.productoDoc.delete();
   }

}
