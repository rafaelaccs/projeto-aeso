import { RouterModule, Routes } from "@angular/router";
import { PedidoComponent } from './pedidos/pedido.component';
import { AppComponent } from './app.component';
import { MesasComponent } from './mesas/mesas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientComponent } from './cliente/cliente.component';

const appRoutes: Routes = [

    { path:'', component: PedidoComponent },
    { path:'mesas', component: MesasComponent },
    { path:'produtos', component: ProdutosComponent },
    { path:'produtos/:id', component: ProdutosComponent }

    // { 
    //     path: 'home',
    //     component:HomeComponent,
    //     children:[
    //         { path:'main', component: HomeComponent, outlet:'rota1'},
    //         { path:'mesas', component: MesasComponent, outlet:'rota2'},
    //         { path:'produtos', component:ProdutosComponent, outlet:'rota3'}
    //     ]    
    // },{
    //     path: 'app',
    //     component: ClientComponent
    // },{
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // }

];

export const routing = RouterModule.forRoot(appRoutes);