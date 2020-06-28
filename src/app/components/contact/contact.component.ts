import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formularioContacto: FormGroup;

  private emailPattern: any = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private toastr: ToastrService, private dbData: DataService) {
    this.formularioContacto = this.crearFormulario();
   }

   get nombre() { return this.formularioContacto.get('nombre'); }
   get email() { return this.formularioContacto.get('email'); }
   get mensaje() { return this.formularioContacto.get('mensaje'); }

  crearFormulario(){
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(144)]),
      fecha: new FormControl(new Date())
    });
  }

  reiniciarFormulario(): void {
    this.formularioContacto.reset();
  }

  guardarFormulario(): void {
    if(this.formularioContacto.valid){
      this.dbData.guardarContacto(this.formularioContacto.value);
      this.reiniciarFormulario();
      console.log('Contacto Guardaro');
      this.toastr.success("Contacto Guardado.");
    }
  }

  ngOnInit(): void {
  }

}
