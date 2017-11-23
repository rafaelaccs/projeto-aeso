import { Component } from "@angular/core";
import { ProdutosService } from "./produtos.service";
import { ProdutosComponent } from "./produtos.component";


@Component({
    moduleId: module.id,
    selector: 'produtos-listagem',
    
    templateUrl: './produtos-listagem.component.html'
})

export class ProdutosListagemComponent {

    produtos: ProdutosComponent[] = [];    
    service: ProdutosService;
    mensagem: string = '';

    constructor(service: ProdutosService){
        
        this.service = service;
        this.service
            .lista()
            .subscribe(produtos => {
                this.produtos = produtos;
            }, erro => console.log(erro));

    }

    remove(produto){
        console.log("Chamou remove");
        
        this.service
            .remove(produto)
            .subscribe(
                () => {
                    // console.log("Produto Removido com sucesso!");                    
                    let novosProdutos = this.produtos.slice(0);
                    let indice = novosProdutos.indexOf(produto);
                    novosProdutos.splice(indice, 1);
                    this.produtos = novosProdutos;
                    this.mensagem = "Produto removido com sucesso!";
                },
                erro =>{
                    console.log(erro);
                    this.mensagem = "Produto removido com sucesso!"; 
                } 
                
            );
        
    }

     
}