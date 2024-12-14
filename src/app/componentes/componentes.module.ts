import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ContactanosInformacionComponent } from './contactanos-informacion/contactanos-informacion.component';
import { FooterComponent } from './footer/footer.component';
import { CardTiendaOnlineComponent } from './card-tienda-online/card-tienda-online.component';


@NgModule({
  declarations: [
    BarraNavegacionComponent,
    ContactanosInformacionComponent,
    FooterComponent,
    CardTiendaOnlineComponent
  ],
  exports:[
    CardTiendaOnlineComponent,
    BarraNavegacionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
