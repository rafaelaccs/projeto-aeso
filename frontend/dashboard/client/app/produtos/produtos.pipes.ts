import { Pipe, PipeTransform } from "@angular/core";
import { ProdutosComponent } from "./produtos.component";

@Pipe({
    name:'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{

    transform(produtos:ProdutosComponent[], digitado: string){

        digitado = digitado.toLowerCase();

        return produtos
            .filter(
                produto => produto.nomeProduto
                            .toLowerCase()
                            .includes(digitado)
            );
    }   

}