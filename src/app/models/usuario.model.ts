export class Usuario {
  Email: string
  Rol: number

  constructor(
    Email: string,
    Rol: number,
    Token: string,
    idUsuario: number
  ) {
    this.Email = Email
    this.Rol = Rol
    this.Token = Token
    this.idUsuario = idUsuario
  }
  Token: string
  idUsuario: number
}
