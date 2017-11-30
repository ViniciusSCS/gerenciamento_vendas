import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';

const produtosRoutes: Routes = [
    {
        path: 'produtos',
        component: ProdutosListComponent
    }
]

@NgModule ({
    imports:[RouterModule.forChild(produtosRoutes)],
    exports:[RouterModule]
})

export class ProdutoListRouting {}