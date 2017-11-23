import { Component } from "@angular/core";
import { Http } from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'produtos',
    templateUrl: './produtos.component.html'
})

export class ProdutosComponent {

    codigoProduto: String;
    nomeProduto: String;
    valorProduto: number;
    categoriaProduto: string;
    descricaoProduto: string;
    itens: Array<string>[0] = "Teste";
    _id: string;

   

    

    

     
}