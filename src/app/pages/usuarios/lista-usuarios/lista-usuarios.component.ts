import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public listaUsuarios: IUsuario[];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    ) {
    this.listaUsuarios = [];
  }

  ngOnInit() {
    // iniciar loading de carga.
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuariosService.getUsersByFilter().subscribe((resp: IUsuario[]) => {
      this.listaUsuarios = resp;
      // finalizar loading de carga.
    },
    (err) => console.log(err));
  }

  verDetalleUsuario(id: number) {
    this.router.navigate(['/detalle-usuario', id]);
  }

}
