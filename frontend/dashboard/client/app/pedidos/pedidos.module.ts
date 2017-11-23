import { NgModule } from '@angular/core';
import { PedidoComponent } from './pedido.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListaPedidosComponent } from './lista-pedidos.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PedidoService } from "./lista-pedido.service";



@NgModule({
    imports: [FormsModule, HttpModule, BrowserModule, ReactiveFormsModule],
    declarations: [PedidoComponent, ListaPedidosComponent],
    exports: [PedidoComponent ],
    providers:  [PedidoService]
})

export class PedidoModule { }