import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ConsultarProspectosComponent } from './consultar-prospectos/consultar-prospectos.component';
import { ComponentesModule } from "../componentes/componentes.module";
import { GuardarProductosComponent } from './guardar-productos/guardar-productos.component';


@NgModule({
  declarations: [
    ConsultarProspectosComponent,
    GuardarProductosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdministracionRoutingModule,
    ComponentesModule
]
})
export class AdministracionModule { }
