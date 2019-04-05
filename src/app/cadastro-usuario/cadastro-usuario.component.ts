import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Classes/usuario';
import { MzToastModule, MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  @Input() Login: string;
  @Input() Senha: string;

  constructor(
    public ServiceUsuario: UsuarioService,
    private router: Router,
    public toast: MzToastService
  ) { }

  ngOnInit() {
  }

  Gravar(){
    
    let user = new Usuario(this.ServiceUsuario.generateId(), this.Login, this.Senha);

    if(this.ServiceUsuario.verificaLoginCadastrado(user.Login))
    {
      
      this.showToast("Este login ja foi utilizado!", 1);

      this.Login = "";
      this.Senha = "";

      return;
    }

    this.ServiceUsuario.addUser(user);

    this.showToast("Cadastrado com sucesso!", 2);
    
    console.log(this.ServiceUsuario.getUsers());

    this.router.navigate(['']);
  }

  print(){
    alert(this.Login + " " + this.Senha);
  }

  showToast(text: string, style: number){

    if(style == 1)
     this.toast.show(text, 3000, 'yellow')

     if(style == 2)
     this.toast.show(text, 3000, 'blue')
  }


}
