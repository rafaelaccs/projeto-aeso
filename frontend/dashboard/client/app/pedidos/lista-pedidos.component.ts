import { Component } from "@angular/core";
import { PedidoService } from "./lista-pedido.service";
import { PedidoComponent } from "./pedido.component";

@Component({
    moduleId: module.id,
    selector: 'lista-pedidos',
    templateUrl: 'lista-pedidos.component.html' 
})
export class ListaPedidosComponent{
    pedidos: PedidoComponent[] = [];
    service: PedidoService;
    mensagem: string = '';

    constructor(service: PedidoService) {

        this.service = service;
        this.service
            .lista()
            .subscribe(pedidos => {
                this.pedidos = pedidos;
            }, erro => console.log(erro));

    }

    
}