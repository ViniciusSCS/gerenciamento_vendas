import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Produtos } from './produtos';

@Injectable()
export class ProdutosService {
    private produtosUrl = "http://localhost:8000/produtos";

    constructor(
        private http: Http
    ) { }

    /**
     * Pega todas os produtos
     */
    getProdutos(): Observable<Produtos[]> {
        return this.http.get(this.produtosUrl).map((response: Response) => <Produtos[]>response.json()).catch(this.handleError);
    }

    //Mostrando os erros
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}