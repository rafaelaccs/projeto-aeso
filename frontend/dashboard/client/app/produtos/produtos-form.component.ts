import { Component } from "@angular/core";
import { ProdutosComponent } from "./produtos.component";
import { ProdutosListagemComponent } from "./produtos-listagem.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProdutosService } from "./produtos.service";
import { ActivatedRoute, Router } from "@angular/router";


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
    router: Router;
    mensagem: string = '';

    constructor(service: ProdutosService, fb:FormBuilder, route: ActivatedRoute, router: Router){
        
        this.service = service;

        this.route = route;
        this.router = router;

        this.route.params.subscribe(params =>{

            let id = params['id'];

            if (id) {
                
                this.service.buscaPorId(id)
                    .subscribe(
                        produto => this.produto = produto,
                        erro => console.log(erro)
                    );
            }


         });


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
            .subscribe(res => {
                console.log("Produto Cadastrado com sucesso!");
                this.mensagem = res.mensagem;
                this.produto = new ProdutosComponent();
                if (!res.inclusao) this.router.navigate(['/produtos']);
                

            }, erro => console.log(erro));
    }
}