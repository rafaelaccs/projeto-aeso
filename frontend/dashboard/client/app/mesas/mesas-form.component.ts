import { Component } from "@angular/core";
import { MesasComponent } from "./mesas.component";
import { Http, Headers } from "@angular/http";


@Component({
    moduleId:module.id,
    selector:'mesas-form',
    templateUrl:'mesas-form.component.html'
})

export class MesasFormComponent{
    mesa: MesasComponent = new MesasComponent();
    http: Http;

    constructor(http: Http){
        this.http = http;
    }

    cadastrar(event) {
        event.preventDefault();

        console.log(this.mesa);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http
             .post("url/vem/aqui", JSON.stringify(this.mesa), { headers: headers})
             .subscribe(() => {
                 this.mesa = new MesasComponent();
                 console.log('Mesa cadastrada com sucesso!');

             }, erro => console.log(erro));
    }
}