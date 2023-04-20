import { TipoPerfil, Usuario } from '../usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];


  constructor(private usuarioServicio: UsuarioService) {
  }


  ngOnInit(): void {
    this.obtenerListaDeUsuarios();


  }

  obtenerListaDeUsuarios(perfil?: string) {
    this.usuarioServicio.obtenerListaDeUsuarios(perfil).subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }


}
