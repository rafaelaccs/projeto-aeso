import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'pedido',
    templateUrl: 'pedido.component.html'
})
export class PedidoComponent{
    codigoPedido: String;
    statusPedido: String;
    totalPedido: number;
    mesaPedido: string;
    usuarioPedido: Object;
    itensPedido: Array<string>[0] = "Teste";
    _id: string;
}