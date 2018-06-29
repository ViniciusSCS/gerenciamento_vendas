import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { Produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'produtos-list',
  templateUrl: './produtos-list.component.html',
})
export class ProdutosListComponent implements OnInit {
  produtos: Produtos[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) {}

  ngOnInit(){
    this.getProdutos();
  }
  
  getProdutos(){
    this.produtosService.getProdutos().subscribe(
      produtos => this.produtos = produtos,
      error => this.errorMessage = <any> error
    );
  }

  goToshow(produtos: Produtos):void {
    let link = ['/produtos', produtos.id];
    this.router.navigate(link);
  }

  redirect(): void {
    let link = ['/produtos/novo'];
    this.router.navigate(link);
  }

}
