import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})

export class AppComponent{

    // fotos: Array<Object> = [];

    //constructor(http: Http) {

/*         let stream = http.get('http://localhost:3003/api/pedido');
        stream.subscribe(function(res) {
            this.fotos = res.json();
            console.log(this.fotos);
        }, erro => console.log(erro)); */

        // http
        // .get('http://localhost:3003/api/produto')
        // .map(res => res.json())
        // .subscribe(fotos => {
        //     this.fotos = fotos;
        //     console.log(this.fotos);            
        // }, erro => console.log(erro));

   // }
}