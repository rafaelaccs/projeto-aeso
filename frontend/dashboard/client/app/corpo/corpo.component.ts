import { Component } from "@angular/core";
import { PedidoService } from "../pedidos/lista-pedido.service";
import { PedidoComponent } from "../pedidos/pedido.component";

@Component({
    moduleId: module.id,
    selector: 'corpo',
    templateUrl: './corpo.component.html'

})

export class CorpoComponent {

    pedido: PedidoComponent[] = [];
    service: PedidoService;

    constructor(service: PedidoService) {
        
        this.service = service;
        this.service
            .lista()
            .subscribe(pedidos => {
                this.pedido = pedidos;
            }, erro => console.log(erro));

    }
}