import { Component } from "@angular/core";
import { ProdutosComponent } from "./produtos.component";
import { ProdutosListagemComponent } from "./produtos-listagem.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProdutosService } from "./produtos.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'produtos-form',
    templateUrl: 'produtos-form.component.html'
})

export class ProdutosFormComponent{

    produto: ProdutosComponent = new ProdutosComponent();
    listaProduto: ProdutosListagemComponent;
    meuForm: FormGroup;
    service: ProdutosService;
    route: ActivatedRoute;

    constructor(service: ProdutosService, fb:FormBuilder, route: ActivatedRoute){

        // this.route = route;

        // this.route.params.subscribe(params =>{

        //     let id = params['id'];
        //     console.log(id);

        //     this.service.buscaPorId(id)
        //         .subscribe(
        //             produto => this.produto = produto,
        //             erro => console.log(erro)
        //         );

        // });

        this.service = service;

        this.meuForm = fb.group({
            codigo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            nome:['', Validators.required],
            valor: ['', Validators.required],
            categoria:[''],
            descricao:['']
        });
    }

    cadastrar(event) {
        event.preventDefault();

        console.log(this.produto);

        // Usar serviço

        this.service
            .cadastra(this.produto)
            .subscribe(() => {
                console.log("Produto Cadastrado com sucesso!");
                
                this.produto = new ProdutosComponent();
                this.listaProduto = new ProdutosListagemComponent(this.service);
            }, erro => console.log(erro));
    }
}