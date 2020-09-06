import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const app_routes: Routes = [
    {
        path: '', children: [
            {path: 'lista-usuarios', component: ListaUsuariosComponent},
            {path: 'detalle-usuario', component: DetalleUsuarioComponent},
            {path: '', redirectTo: 'lista-usuarios', pathMatch: 'full'}
        ]
    },
    {path: '404', component: PageNotFoundComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
imports: [
    RouterModule.forRoot(app_routes, {useHash: true, enableTracing: false})
],
exports: [
    RouterModule
]
})
export class RoutesModule {
}
