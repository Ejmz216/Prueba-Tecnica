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
  usuariosFiltrados: Usuario[];
  perfilSeleccionado: string = '';



  constructor(private usuarioServicio: UsuarioService) {
  }


  ngOnInit(): void {
    this.obtenerListaDeUsuarios();
  }

  private obtenerListaDeUsuarios() {
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
      this.usuariosFiltrados = dato;
    });
  }


  buscar() {
    if (this.perfilSeleccionado) {
      this.usuariosFiltrados = this.usuarios.filter(usuario => usuario.perfil === this.perfilSeleccionado);
    } else {
      this.usuariosFiltrados = this.usuarios;
    }
  }


}
