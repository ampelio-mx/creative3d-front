import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrecuentlyAskedQuestionsComponent } from './frecuently-asked-questions/frecuently-asked-questions.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ServiciosDescripcionComponent } from './servicios-descripcion/servicios-descripcion.component';


const routes: Routes = [
  {path:'frecuently-asked-questions', component: FrecuentlyAskedQuestionsComponent},
  {path: 'galeria-3d', component: GaleriaComponent},
  {path: 'nuestros-servicios', component: NuestrosServiciosComponent},
  {path: 'home', component: PaginaInicioComponent},
  {path: 'sobre-nosotros', component:  SobreNosotrosComponent},
  {path: 'servicios-descripcion', component:  ServiciosDescripcionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPrincipalRoutingModule { }
