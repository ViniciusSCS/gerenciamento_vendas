import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {ProdutosListComponent} from './pages/produtos/produtos-list/produtos-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/produtos', pathMatch: 'full'},//página root
]

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports:[ RouterModule ]
})


export class AppRoutingModule {}