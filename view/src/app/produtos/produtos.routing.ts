import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosInsertComponent } from './produtos-insert/produtos-insert.component';

const produtosRoutes: Routes = [
    {
        path: 'produtos',
        component: ProdutosListComponent
    },
    {
        path: 'produtos/novo',
        component: ProdutosInsertComponent
    }
]

@NgModule ({
    imports:[RouterModule.forChild(produtosRoutes)],
    exports:[RouterModule]
})

export class ProdutoListRouting {}