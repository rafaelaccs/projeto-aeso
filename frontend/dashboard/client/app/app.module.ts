import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PedidoModule } from './pedidos/pedidos.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { AppComponent } from './app.component';
import { LateralComponent } from "./menu-lateral/lateral.component";
import { CorpoComponent } from "./corpo/corpo.component";
import { TabelaComponent } from "./tabela/tabela.component";
import { MenuTopComponent } from "./menu-top/menu-top.component";
import { MesasModule } from './mesas/mesas.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ClientComponent } from './cliente/cliente.component';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routes";
import 'rxjs/add/operator/map';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BotaoModule } from "./botao/botao.module";


@NgModule({
    imports: [ 
        BrowserModule, 
        HttpModule,
        routing,
        FormsModule,
        RouterModule,
        PedidoModule,
        MesasModule,
        ProdutosModule,
        BotaoModule
    ],
    declarations: [ 
        AppComponent, 
        LateralComponent,
        CorpoComponent,
        ClientComponent,
        TabelaComponent,
        MenuTopComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }