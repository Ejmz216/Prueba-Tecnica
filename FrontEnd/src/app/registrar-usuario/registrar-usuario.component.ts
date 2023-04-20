import { Route, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { TipoPerfil, Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  confirmPssw: string = '';
  constructor(private usuarioServicio: UsuarioService, private router: Router) {

  }
  ngOnInit(): void { }

  guardarUsuario() {
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      this.irALaListaDeUsuarios();
    });
  }

  irALaListaDeUsuarios() {
    this.router.navigate(['/usuarios']);
  }

  OnSubmit() {
    this.guardarUsuario();

  };

  seleccionarPerfil(perfil: TipoPerfil) {
    this.usuario.perfil = perfil;
  }


}
