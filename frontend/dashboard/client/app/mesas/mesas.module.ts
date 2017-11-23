import { NgModule } from '@angular/core';
import { MesasComponent } from './mesas.component';
import { MesasFormComponent } from './mesas-form.component';
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [FormsModule],
    declarations: [ MesasComponent, MesasFormComponent],
    exports: [MesasComponent]
})

export class MesasModule { }