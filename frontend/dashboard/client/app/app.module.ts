import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ProdutosComponent } from "./produtos/produtos.component";
import { LateralComponent } from "./menu-lateral/lateral.component";
import { CorpoComponent } from "./corpo/corpo.component";
import { HomeComponent } from "./home/home.component";
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
    imports: [ BrowserModule, HttpModule, HomeModule ],
    declarations: [ AppComponent, LateralComponent, TabelaComponent, ProdutosComponent, CorpoComponent, HomeComponent],
    bootstrap: [ AppComponent ]
})

export class AppModule { }