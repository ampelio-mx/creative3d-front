import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarProspectosComponent } from './consultar-prospectos/consultar-prospectos.component';
import { GuardarProductosComponent } from './guardar-productos/guardar-productos.component';

const routes: Routes = [
  {path:'consultas', component: ConsultarProspectosComponent},
  {path:'guardar-productos', component: GuardarProductosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'consultas'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
