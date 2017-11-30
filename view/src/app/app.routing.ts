import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';


const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},//página root
    {path: 'produtos', component: ProdutosListComponent}
]

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports:[ RouterModule ]
})


export class AppRoutingModule {}