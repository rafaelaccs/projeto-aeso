import { NgModule } from '@angular/core';
import { ProdutosComponent } from './produtos.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutosListagemComponent } from './produtos-listagem.component';
import { ProdutosFormComponent } from './produtos-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ProdutosService } from "./produtos.service";
import { RouterModule } from "@angular/router";
import { FiltroPorTitulo } from "./produtos.pipes";
import { BotaoModule } from "../botao/botao.module";




@NgModule({
    imports: [FormsModule, HttpModule, RouterModule, BrowserModule, ReactiveFormsModule , BotaoModule],
    declarations: [ProdutosComponent, ProdutosFormComponent, ProdutosListagemComponent, FiltroPorTitulo],
    exports: [ProdutosComponent, FiltroPorTitulo],
    providers:  [ProdutosService]
})

export class ProdutosModule { }