import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    // iniciar loading de carga.
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuariosService.getUsers().subscribe((resp: any) => {
      console.log('getUsers:: ', resp);
      // finalizar loading de carga.
    });
  }

}
