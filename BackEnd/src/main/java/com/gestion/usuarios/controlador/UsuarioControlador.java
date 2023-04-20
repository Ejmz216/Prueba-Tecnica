package com.gestion.usuarios.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.usuarios.modelo.TipoPerfil;
import com.gestion.usuarios.modelo.usuario;
import com.gestion.usuarios.repositorio.UsuariosRepositorio;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioControlador {

	@Autowired
	private UsuariosRepositorio repositorio;

	@GetMapping("/usuarios")
	public List<usuario> listarTodosLosUsuarios() {
		return repositorio.findAll();
	}

	@PostMapping("/registrar-usuarios")
	public usuario guardarUsuario(@RequestBody usuario usuario) {
		return repositorio.save(usuario);
	}
}
