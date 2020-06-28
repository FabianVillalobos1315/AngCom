import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// Rutas
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';

// Servicios

import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500
    }),
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
