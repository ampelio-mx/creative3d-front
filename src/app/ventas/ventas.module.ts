import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from '../componentes/componentes.module';

import { VentasRoutingModule } from './ventas-routing.module';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TiendaOnlineComponent } from './tienda-online/tienda-online.component';
import { TiendaOnlineImpresorasFilamentoComponent } from './tienda-online-impresoras-filamento/tienda-online-impresoras-filamento.component';
import { TiendaOnlineImpresorasResinaComponent } from './tienda-online-impresoras-resina/tienda-online-impresoras-resina.component';
import { TiendaOnlineFilamentosComponent } from './tienda-online-filamentos/tienda-online-filamentos.component';
import { TiendaOnlineResinaComponent } from './tienda-online-resina/tienda-online-resina.component';


@NgModule({
  declarations: [
    CotizacionComponent,
    CarritoComponent,
    TiendaOnlineComponent,
    TiendaOnlineImpresorasFilamentoComponent,
    TiendaOnlineImpresorasResinaComponent,
    TiendaOnlineFilamentosComponent,
    TiendaOnlineResinaComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    ComponentesModule
  ]
})
export class VentasModule { }
