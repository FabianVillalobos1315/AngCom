import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto } from '../producto.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  formData: Producto;

  private contactCollection: AngularFirestoreCollection<any>;
  private productoCollection: AngularFirestoreCollection<Producto>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<any>('contactos');
    this.productoCollection = afs.collection<Producto>('productos');
   }

   guardarContacto(nuevoContacto: any): void {
    this.contactCollection.add(nuevoContacto);
   }


   guardarProducto(nuevoProducto: Producto): void {
    this.productoCollection.add(nuevoProducto);
   }

   obtenerProductos(){
    return this.afs.collection('productos').snapshotChanges();
   }
}
