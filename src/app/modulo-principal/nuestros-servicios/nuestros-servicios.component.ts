import { Component } from '@angular/core';

@Component({
  selector: 'app-nuestros-servicios',
  templateUrl: './nuestros-servicios.component.html',
  styleUrl: './nuestros-servicios.component.scss'
})
export class NuestrosServiciosComponent {

  impresionFilamentoLink: string = '';
  impresionResinaLink: string = '';
  escaneoLink: string = '';
  postprocesadoLink: string = '';
  disenioLink: string = '';

  constructor(){};

  ngOnInit():void{

    this.impresionFilamentoLink = '/modulo-principal/servicios-descripcion';
    this.impresionResinaLink = '/modulo-principal/servicios-descripcion';
    this.escaneoLink = '/modulo-principal/servicios-descripcion';
    this.postprocesadoLink = '/modulo-principal/servicios-descripcion';
    this.disenioLink = '/modulo-principal/servicios-descripcion';
  }; 
  
}
