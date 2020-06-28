import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Ruta {codigoRuta: string; nombre: string; descripcion: string;}

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  private rutasCollection: AngularFirestoreCollection<Ruta>;
  rutas: Observable<Ruta[]>;

  constructor(private afs: AngularFirestore) 
  {
    this.rutasCollection = afs.collection<Ruta>('rutas');
    this.rutas = this.rutasCollection.valueChanges();
  }

  listarRutas(){
    return this.rutas;
  }
}
