package com.gestion.usuarios.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuarios")
public class usuario {

	@Id
	@Column(name = "usuario", length = 60, nullable = false)
	private String usuario;

	@Column(name = "email", length = 60, nullable = false, unique = true)
	private String email;

	@Column(name = "pssw", length = 20, nullable = false)
	private String pssw;

	@Enumerated(EnumType.STRING)
	@Column(name = "perfil", nullable = false)
	private TipoPerfil perfil;

	public usuario() {

	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPssw() {
		return pssw;
	}

	public void setPssw(String pssw) {
		this.pssw = pssw;
	}

	public TipoPerfil getPerfil() {
		return perfil;
	}

	public void setPerfil(TipoPerfil perfil) {
		this.perfil = perfil;
	}

	public usuario(String usuario, String email, TipoPerfil perfil, String pssw) {
		super();
		this.usuario = usuario;
		this.email = email;
		this.pssw = pssw;
		this.perfil = perfil;
	}
}
