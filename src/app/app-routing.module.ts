import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'CadastroUsuarioRoute', component: CadastroUsuarioComponent },
  { path: 'ListaProdutosRoute', component: ListaProdutosComponent },
  { path: 'CarrinhoCompraRoute', component: CarrinhoComprasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

