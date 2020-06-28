import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ruta } from '../modelos/ruta.model';


@Injectable({
  providedIn: 'root'
})
export class RutasService {

  formData: Ruta;

  private rutasCollection: AngularFirestoreCollection<Ruta>;
  rutas: Observable<Ruta[]>;
  private rutaDoc: AngularFirestoreDocument<Ruta>;

  constructor(private afs: AngularFirestore){
    this.rutasCollection = afs.collection<Ruta>('rutas');
    this.rutas = this.rutasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Ruta;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listarRutas(){
    return this.rutas;
  }

  agregarRuta(ruta: Ruta): void{
    this.rutasCollection.add(ruta);
  }

  eliminar(item){
    this.rutaDoc = this.afs.doc<Ruta>('rutas/'+item.id);
    this.rutaDoc.delete();
   }
}
