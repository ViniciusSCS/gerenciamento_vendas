import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';

import { AppRoutingModule } from './app.routing';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutoListRouting } from './produtos/produtos.routing';
import { ProdutosInsertComponent } from './produtos/produtos-insert/produtos-insert.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ProdutosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
