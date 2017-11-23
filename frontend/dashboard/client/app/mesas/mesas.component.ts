import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'mesas',
    templateUrl: './mesas.component.html'
})

export class MesasComponent{
    @Input() codigo: string;
    @Input() nome: string;   

    
}