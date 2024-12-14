import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaOnlineComponent } from './tienda-online/tienda-online.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TiendaOnlineFilamentosComponent } from './tienda-online-filamentos/tienda-online-filamentos.component';
import { TiendaOnlineImpresorasResinaComponent } from './tienda-online-impresoras-resina/tienda-online-impresoras-resina.component';
import { TiendaOnlineImpresorasFilamentoComponent } from './tienda-online-impresoras-filamento/tienda-online-impresoras-filamento.component';

const routes: Routes = [
  {path: 'tienda-online', component: TiendaOnlineComponent},
  {path: 'tienda-online-filamentos', component: TiendaOnlineFilamentosComponent},
  {path: 'tienda-online-impresoras-resina', component: TiendaOnlineImpresorasResinaComponent},
  {path: 'tienda-online-impresoras-filamento', component: TiendaOnlineImpresorasFilamentoComponent},
  {path: 'tienda-online-resina', component: TiendaOnlineImpresorasResinaComponent},
  {path: 'cotizacion', component: CotizacionComponent},
  {path:  'carrito-compras',  component: CarritoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'tienda-online'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
