import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //Esta URL obtiene el listado de todos los usuarios en el backend
  private baseURL = "http://localhost:8080/api/v1/usuarios";
  private baseURL2 = "http://localhost:8080/api/v1/registrar-usuarios";
  constructor(private httpClient: HttpClient) { }

  //este metodo nos sirve para obtener los Usuarios
  obtenerListaDeUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  registrarUsuario(usuario: Usuario): Observable<Object> {
    return this.httpClient.post(`${this.baseURL2}`, usuario);
  }
}
