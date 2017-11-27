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

    cadastra(produto: ProdutosComponent): Observable<MensagemCadastro>{

        if(produto._id){
            return this.http
                .put(this.url + '/' + produto._id, JSON.stringify(produto), {headers: this.headers})
                .map(() => new MensagemCadastro('Foto alterada com sucesso', false));
        } else {
            return this.http
                .post(this.url, JSON.stringify(produto), { headers: this.headers })
                .map(() => new MensagemCadastro('Foto incluída com sucesso', true));
        }

            
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

export class MensagemCadastro{

    constructor(private _mensagem: string, private _inclusao:boolean){

        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string{
        return this._mensagem;
    }

    get inclusao(): boolean{
        return this._inclusao;
    }
}