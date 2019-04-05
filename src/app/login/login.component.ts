import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

import { UsuarioService } from '../Services/usuario.service';
import { MzToastModule, MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() Login: string;
  @Input() Senha: string;

  constructor(
    public serviceUsuario: UsuarioService,
    private router: Router,
    public toast: MzToastService
  ) { }

  ngOnInit() {
  }

  VerificaAcesso(login: string, senha: String){

    if(!this.serviceUsuario.verificaUsuarioCadastrado(this.Login, this.Senha))
    {
      
      this.showToast("Usuario não encontrado!");

      this.Login = "";
      this.Senha = "";

      return;

    }

    this.router.navigate(['/ListaProdutosRoute']);

  }

  showToast(text: string){

    this.toast.show(text, 4000, 'yellow')

  }

}
