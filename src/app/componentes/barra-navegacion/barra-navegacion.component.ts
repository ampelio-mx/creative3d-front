import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.scss'
})
export class BarraNavegacionComponent {

  homeLink: string = '';
  sobreNosotrosLink: string = '';
  serviciosLink: string = '';
  galeriaLink: string = '';
  faqLink: string = '';

  
  tiendaOnLineImpresorasFilamentoLink: string = '';
  tiendaOnLineImpresorasResinaLink: string = '';
  tiendaOnLineFilamentosLink: string = '';
  tiendaOnLineResinasLink: string = '';


  constructor(){};

  ngOnInit():void{
    this.homeLink = '/modulo-principal/home';
    this.sobreNosotrosLink =  '/modulo-principal/sobre-nosotros';
    this.serviciosLink =  '/modulo-principal/nuestros-servicios';
    this.galeriaLink = '/modulo-principal/galeria-3d';
    this.faqLink = '/modulo-principal/frecuently-asked-questions';

    this.tiendaOnLineImpresorasFilamentoLink = '/ventas/tienda-online-impresoras-filamento';
    this.tiendaOnLineImpresorasResinaLink = '/ventas/tienda-online-impresoras-resina';
    this.tiendaOnLineFilamentosLink = '/ventas/tienda-online-filamentos';
    this.tiendaOnLineResinasLink = '/ventas/tienda-online-resina'
  }
 

}
