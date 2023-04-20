import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:8080/api/v1/usuarios";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeUsuarios(perfil?: string): Observable<Usuario[]> {
    let params = new HttpParams();
    if (perfil) {
      params = params.set('perfil', perfil);
    }
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`, { params });
  }
}
