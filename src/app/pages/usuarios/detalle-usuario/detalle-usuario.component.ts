import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../usuarios';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  private id: number;
  public usuario: IUsuario;

  constructor(
    private usuariosService: UsuariosService,
    private activateRoute: ActivatedRoute,
    ) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.cargarUsuarioPorId(this.id);
  }

  cargarUsuarioPorId(id: number) {
    this.usuariosService.getUserById(id).subscribe((resp: IUsuario) => {
      this.usuario = resp;
    });
  }

}
