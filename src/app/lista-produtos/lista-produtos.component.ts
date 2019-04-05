import { Component, OnInit } from '@angular/core';
import { Produto } from '../Classes/produto';
import { ProdutoService } from '../Services/produto.service';
import { MzToastModule, MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  ListaProdutos: Produto[]

  constructor(
    public serviceProduto: ProdutoService,
    public toast: MzToastService
  ) { }

  ngOnInit() {
    this.ListaProdutos = this.serviceProduto.getProdutos();
  }

  adicionarCarrinho(produto: Produto){

    this.serviceProduto.addCarrinho(produto)
    this.showToast(produto.Nome + " foi adicionado ao carrinho!")
    
  }

  showToast(text: string){

    this.toast.show(text, 4000, 'green')

  }
}
