import { Route, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { TipoPerfil, Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";



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
    swal.fire('Usuario registrado', `El usuario ${this.usuario.usuario} ha sido registrado con exito`, `success`);
  }

  OnSubmit() {
    if (this.usuario.pssw.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (this.usuario.pssw !== this.confirmPssw) {
      alert('La contraseña y la confirmación de la contraseña deben coincidir.');
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(this.usuario.email)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }

    if (this.usuario.perfil === undefined) {
      alert('Debe seleccionar un perfil.');
      return;
    }

    this.guardarUsuario();

  };

  seleccionarPerfil(perfil: TipoPerfil) {
    this.usuario.perfil = perfil;
  }


}
