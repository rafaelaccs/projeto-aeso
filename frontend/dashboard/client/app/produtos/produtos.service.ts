import { Http, Headers, Response } from '@angular/http';
import { ProdutosComponent } from "./produtos.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProdutosService {

    http: Http;
    headers: Headers;
    url: string = "https://projeto-aeso.herokuapp.com/api/produtos";

    constructor(http:Http){

        this.http = http;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(produto:ProdutosComponent): Observable<Response>{
        return this.http
            .post(this.url, JSON.stringify(produto), { headers: this.headers });
            
    }

    lista(): Observable<ProdutosComponent[]>{
        return this.http
            .get(this.url)
            .map(res => res.json());
            
    }

    remove(produto: ProdutosComponent){
        return this.http.delete(this.url + "/" + produto._id);
    }

    buscaPorId(id: string): Observable<ProdutosComponent>{

        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }
}