import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { ProdutoListRouting } from './produtos.routing';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosInsertComponent } from './produtos-insert/produtos-insert.component';
import { ProdutosService } from './produtos.service';


@NgModule({
    declarations: [
        ProdutosListComponent,
        ProdutosInsertComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],

    providers: [ProdutosService],
    bootstrap: []
})
export class ProdutosModule { }
