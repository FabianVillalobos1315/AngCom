import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductoComponent } from './components/producto/producto.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { LocalizacionComponent } from './components/localizacion/localizacion.component';

const APP_ROUTES: Routes = [
    { path: 'Inicio', component: InicioComponent },
    { path: 'Contacto', component: ContactComponent },
    { path: 'Producto', component: ProductoComponent },
    { path: 'Rutas', component: RutasComponent },
    {path: 'Localizacion', component: LocalizacionComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

// tslint:disable-next-line: eofline
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });