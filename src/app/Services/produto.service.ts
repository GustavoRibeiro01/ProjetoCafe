import { Injectable } from '@angular/core';

import { Produto } from '../Classes/produto'
import { ListaProdutos } from '../mook-produto';
import { ListaCarrinhoProdutos } from '../mook-carrinho-compra';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    
  ) { }

  getProdutos(){

    return ListaProdutos.map(f => f)

  }

  getCarrinhoProdutos(){

    return ListaCarrinhoProdutos.map(f => f)

  }

  addCarrinho(produto: Produto){

    ListaCarrinhoProdutos.push(produto)

    console.log(this.getCarrinhoProdutos())
  }

  removeCarrinho(produto: Produto){

    ListaCarrinhoProdutos.splice(ListaCarrinhoProdutos.findIndex(f => f.Id == produto.Id), 1)

    console.log("---------------------------------------------------");
    console.log(this.getCarrinhoProdutos());
    console.log("---------------------------------------------------");

  }

  FinalizarCompra(){

    ListaCarrinhoProdutos.splice(0, ListaCarrinhoProdutos.length);

  }
}
