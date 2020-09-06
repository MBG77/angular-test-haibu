import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario, IActivo } from '../usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public listaUsuarios: IUsuario[];
  public estatusUsuario: IActivo[];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    ) {
    this.listaUsuarios = [];
    this.estatusUsuario = [
      {idActivo: 0, desActivo: 'Activo'},
      {idActivo: 1, desActivo: 'Inactivo'},
    ];
  }

  ngOnInit() {
    // iniciar loading de carga.
    this.cargarUsuarios();
  }

  cargarUsuarios(nombre?: string, apellido?: string) {
    this.usuariosService.getUsersByFilter(nombre, apellido).subscribe((resp: IUsuario[]) => {
      this.listaUsuarios = resp;
      // finalizar loading de carga.
    },
    (err) => console.log(err));
  }

  verDetalleUsuario(id: number) {
    this.router.navigate(['/detalle-usuario', id]);
  }

  filtrarUsuarios(nombre: string, apellido: string) {
    console.log('filtro:: ', nombre, apellido);
    this.cargarUsuarios(nombre, apellido);
  }

}
