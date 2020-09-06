import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { HAIBU_URL_SERVICES } from './config/service-config';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public http: HttpClient) { }

  getUserById(id: number) {
    const url =  `${HAIBU_URL_SERVICES.PRUEBA_TECNICA_SF.USER}/${id}`;
    console.log('getUserById url:: ', url);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(url, httpOptions).pipe (
      map(
        (resp: any) => {
          console.log('getUserById RESPONSE: ', resp);
          return resp;
      }),
      catchError(err => {
        console.log('Capturando error localmente..', err);
        return throwError(err);
      })
    );
  }

  getUsersByFilter(activo?: string) {
    let url = HAIBU_URL_SERVICES.PRUEBA_TECNICA_SF.USER;

    if (activo && url.indexOf('?') > 0) {
      url += `&activo=${activo}`;
    } else if (activo && url.indexOf('?') < 0) {
      url += `?activo=${activo}`;
    }
    console.log('getUsersByFilter url:: ', url);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(url, httpOptions).pipe (
      map(
        (resp: any) => {
          console.log('getUsersByFilter RESPONSE: ', resp);
          return resp;
      }),
      catchError(err => {
        console.log('Capturando error localmente..', err);
        return throwError(err);
      })
    );
  }
}
