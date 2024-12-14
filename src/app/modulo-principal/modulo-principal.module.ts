import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { ModuloPrincipalRoutingModule } from './modulo-principal-routing.module';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FrecuentlyAskedQuestionsComponent } from './frecuently-asked-questions/frecuently-asked-questions.component';
import { ServiciosDescripcionComponent } from './servicios-descripcion/servicios-descripcion.component';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  declarations: [
    PaginaInicioComponent,
    SobreNosotrosComponent,
    NuestrosServiciosComponent,
    GaleriaComponent,
    FrecuentlyAskedQuestionsComponent,
    ServiciosDescripcionComponent,   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModuloPrincipalRoutingModule,
    ComponentesModule
  ]
})
export class ModuloPrincipalModule { }
