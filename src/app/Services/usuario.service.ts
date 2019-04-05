import { Injectable } from '@angular/core';
import { ListaUsuarios } from '../mook-usuario';
import { Usuario } from '../Classes/usuario';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor() { }

addUser(user: Usuario): void{

  ListaUsuarios.push(user);

}

getUsers(): Usuario[]{

  return ListaUsuarios.map(f => f);

}

generateId(): number{

  if(ListaUsuarios.length > 0)
  {

    return ListaUsuarios[ListaUsuarios.length - 1].Id + 1;

  }

  return 1;
  
}

findUser(login: string, senha: string): Usuario{

  return ListaUsuarios.find(f => f.Login == login && f.Senha == senha);

}

findLogin(login: string): Usuario{

  return ListaUsuarios.find(f => f.Login == login);

}

verificaLoginCadastrado(login: string): boolean{

  let user = this.findLogin(login);
  
  if(user == null)
  {
    return false;
  }

  return true;

}

verificaUsuarioCadastrado(login: string, senha: string): boolean{

  let user = this.findUser(login, senha);
  
  if(user == null)
  {
    return false;
  }

  return true;

}

}

