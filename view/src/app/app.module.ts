import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';

import { AppRoutingModule } from './app.routing';
import { ProdutoListRouting } from './produtos/produtos.routing';


@NgModule({
  declarations: [
    AppComponent,
    ProdutosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoListRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
