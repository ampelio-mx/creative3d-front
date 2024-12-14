import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'modulo-principal', loadChildren: ()=>import('./modulo-principal/modulo-principal.module').then(m=>m.ModuloPrincipalModule)},
  {path: 'componentes', loadChildren: ()=>import('./componentes/componentes.module').then(m=>m.ComponentesModule)},
  {path:  'ventas', loadChildren: ()=>import('./ventas/ventas.module').then(m=>m.VentasModule)},
  {path: 'modulo-administracion', loadChildren: ()=>import('./administracion/administracion.module').then(m=>m.AdministracionModule)},
  {path: '**', pathMatch: 'full', redirectTo: 'modulo-principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 50],
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
