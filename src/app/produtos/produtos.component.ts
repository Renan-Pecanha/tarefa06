import { Component, OnInit } from '@angular/core';
import { InterProd } from '../produto';
import { ProdutoServiceService } from '../produto-service.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  interface: InterProd[] = [];

  getProdutos(): void{
    this.produtoService.getProdutos()
      .subscribe(produto => this.interface = produto)
  }


  constructor(private produtoService: ProdutoServiceService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  selectedProd?: InterProd;
  onSelect(produto: InterProd): void{
    this.selectedProd = produto;
  }
}
