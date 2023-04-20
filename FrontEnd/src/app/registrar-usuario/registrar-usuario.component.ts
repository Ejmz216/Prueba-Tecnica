import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario();
  constructor() { }
  ngOnInit(): void { }

  OnSubmit(){
    console.log("1");
  };


}
