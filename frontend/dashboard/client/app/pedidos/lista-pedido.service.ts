import { Http, Headers, Response } from '@angular/http';
import { PedidoComponent } from "./pedido.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class PedidoService {

    http: Http;
    headers: Headers;
    url: string = "https://projeto-aeso.herokuapp.com/api/pedidos";

    constructor(http: Http) {

        this.http = http;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(pedido: PedidoComponent): Observable<Response> {
        return this.http
            .post(this.url, JSON.stringify(pedido), { headers: this.headers });

    }

    lista(): Observable<PedidoComponent[]> {
        return this.http
            .get(this.url)
            .map(res => res.json());

    }

    remove(produto: PedidoComponent) {
        return this.http.delete(this.url + "/" + produto._id);
    }

    alteraStatus(pedido:PedidoComponent){
        if(pedido.statusPedido == "SOLICITADO"){
            pedido.statusPedido = "EM_ANDAMENTO";
        }else if(pedido.statusPedido == "EM_ANDAMENTO"){
            pedido.statusPedido = "ENTREGUE";
        }        

        return this.http
                .put(this.url + '/' + pedido._id, JSON.stringify(pedido), {headers: this.headers});
                
        
    }
}