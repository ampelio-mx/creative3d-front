import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { CardTiendaOnlineComponent } from './card-tienda-online/card-tienda-online.component';

const routes: Routes = [
  {path: 'barra-navegacion', component: BarraNavegacionComponent},
  {path: 'footer', component: FooterComponent},
  {path:'card-tienda', component: CardTiendaOnlineComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'barra-navegacion'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
