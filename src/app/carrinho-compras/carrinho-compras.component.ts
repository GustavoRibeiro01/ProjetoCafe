import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { Produto } from '../Classes/produto';
import { ProdutoService } from '../Services/produto.service';
import { MzToastModule, MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  ListaCarrinhoProdutos: Produto[];
  ListaCarrinhoFinal: Produto[] = [];

  constructor(
    public serviceProduto: ProdutoService,
    public toast: MzToastService
  ) { }

  ngOnInit() {

    this.ListaCarrinhoProdutos = this.serviceProduto.getCarrinhoProdutos();
    this.ListaCarrinhoProdutos.forEach(f => this.verificaAdd(f))
    

    console.log(this.ListaCarrinhoFinal)

  }

  verificaAdd(produto: Produto): boolean {

    let prod: Produto;

    if(this.ListaCarrinhoFinal.length > 0)
    {
      prod = this.ListaCarrinhoFinal.find(f => f.Id == produto.Id);
    }
    else
    {
      this.ListaCarrinhoFinal.push(produto)
      return false;
    }

    if(prod == null)
    {
      this.ListaCarrinhoFinal.push(produto)
      return false;
    }
    else
    {
      return true;
    }

  }

  returnQuantidadeItem(id: number): number {

    return this.ListaCarrinhoProdutos.filter(f => f.Id == id).length

  }

  returnQuantidadeTotal(): number {

    return this.ListaCarrinhoProdutos.length

  }

  returnPrecoTotal(): number {

    if(this.ListaCarrinhoProdutos.length == 0)
      return 0.00;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return this.ListaCarrinhoProdutos.map(f => f.Preco).reduce(reducer)

  }

  removeCarrinhoCompras(produto: Produto) {

    this.serviceProduto.removeCarrinho(produto);

    this.ListaCarrinhoProdutos = this.serviceProduto.getCarrinhoProdutos();
    this.ListaCarrinhoFinal = [];
    this.ListaCarrinhoProdutos.forEach(f => this.verificaAdd(f));

    this.showToast(produto.Nome + " foi removido do carrinho!");

  }

  showToast(text: string){

     this.toast.show(text, 3000, 'red')
  }

  finalizarCompra(){

    this.serviceProduto.FinalizarCompra()

  }
}
