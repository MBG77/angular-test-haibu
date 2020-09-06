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

  getUsers(id?: number) {
    let url =  HAIBU_URL_SERVICES.PRUEBA_TECNICA_SF.USER;

    if (id) {
      url += `/${id}`;
    }

    console.log('getUsers url:: ', url);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(url, httpOptions).pipe (
      map(
        (resp: any) => {
          console.log('getUsers RESPONSE: ', resp);
          return resp;
      }),
      catchError(err => {
        console.log('Capturando error localmente..', err);
        return throwError(err);
      })
    );
  }
}
