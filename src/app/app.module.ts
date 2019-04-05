import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';

import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzToastModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    ListaProdutosComponent,
    CarrinhoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzToastModule,
    MzNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
