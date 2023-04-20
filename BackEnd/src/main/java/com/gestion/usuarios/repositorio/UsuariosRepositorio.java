package com.gestion.usuarios.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.usuarios.modelo.TipoPerfil;
import com.gestion.usuarios.modelo.usuario;

@Repository
public interface UsuariosRepositorio extends JpaRepository<usuario, Long> {

    Optional<usuario> findByemail (String correoElectronico);

	static List<usuario> findByPerfil(TipoPerfil valueOf) {
		// TODO Auto-generated method stub
		return null;
	}

}
