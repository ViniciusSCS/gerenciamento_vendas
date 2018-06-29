import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


import { Produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';



@Component({
  selector: 'produtos-insert',
  templateUrl: './produtos-insert.component.html',
})

export class ProdutosInsertComponent implements OnInit {
  produtos: Produtos[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) { }

  ngOnInit(){
    this.getProdutosInsert();
  }
  
  getProdutosInsert(){
    this.produtosService.getProdutosInsert().subscribe(
      produtos => this.produtos = produtos,
      error => this.errorMessage = <any> error
    );
  }

  goToshow(produtos: Produtos):void {
    let link = ['/produtos/cadastrar'];
    this.router.navigate(link);
  }

  goBack(): void {
    let link = ['/produtos'];
    this.router.navigate(link);
  }


}
