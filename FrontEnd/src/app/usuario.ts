export enum TipoPerfil {
  ADMINISTRADOR = 'Administrador',
  COORDINADOR = 'Coordinador',
  INVITADO = 'Invitado'
}

export class Usuario {
  usuario: string;
  email: string;
  pssw: string;
  perfil: TipoPerfil;

}
