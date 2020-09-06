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
  public rutInvalido: boolean;
  public fechaInvalida: boolean;

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
      this.rutInvalido = this.validarRut(this.usuario.rut);
      this.fechaInvalida = this.validateFecha(this.usuario.fechaNacimiento);
    });
  }

  validateFecha(fecha: string): boolean {
    // valida formato de fecha "dd/mm/aaaa"
    const ptDatePattern =  /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
    return !fecha.match(ptDatePattern);
  }

  validarRut(rutCompleto: string) {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto )) {
      return false;
    }

    const tmp 	= rutCompleto.split('-');
    let digv	= tmp[1];
    const rut 	= tmp[0];
    if ( digv === 'K' ) {
      digv = 'k' ;
    }
    return (this.validarDv(Number(rut)) === digv );
  }

  validarDv(rut: number) {
    let M = 0 , S = 1;
    for ( ; rut ; rut = Math.floor(rut / 10)) {
      S = ( S + rut % 10 * (9 - M++ % 6)) % 11;
    }
    return S ? S - 1 : 'k';
  }

}
