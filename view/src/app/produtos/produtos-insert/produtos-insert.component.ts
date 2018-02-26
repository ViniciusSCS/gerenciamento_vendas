import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


import { Produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';



@Component({
  selector: 'produtos-insert',
  templateUrl: './produtos-insert.component.html',
  styleUrls: ['./produtos-insert.component.css']
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
    let timer = Observable.timer(0,5000);
    timer.subscribe(() => this.getProdutosInsert());
  }
  
  getProdutosInsert(){
    this.produtosService.getProdutosInsert().subscribe(
      produtos => this.produtos = produtos,
      error => this.errorMessage = <any> error
    );
  }

  goToshow(produtos: Produtos):void {
    let link = ['/produtos/cadastrar', produtos.id];
    this.router.navigate(link);
  }


}
