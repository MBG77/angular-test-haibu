import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './pages/usuarios/detalle-usuario/detalle-usuario.component';
import { RoutesModule } from './app.routes';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ListaUsuariosComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    PageNotFoundComponent,
    ListaUsuariosComponent,
    DetalleUsuarioComponent
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
