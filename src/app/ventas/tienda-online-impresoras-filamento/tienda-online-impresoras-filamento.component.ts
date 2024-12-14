import { Component, OnInit } from '@angular/core';
import {IProductos} from './../../interfaces/productos.interface';
import { CardsTiendaService } from '../../services/cards-tienda-online/cards-tienda.service';

@Component({
  selector: 'app-tienda-online-impresoras-filamento',
  templateUrl: './tienda-online-impresoras-filamento.component.html',
  styleUrl: './tienda-online-impresoras-filamento.component.scss'
})
export class TiendaOnlineImpresorasFilamentoComponent implements OnInit{

  arregloProductosImpresorasFilamento : IProductos[] = [];

  constructor(private cardServiceProducto: CardsTiendaService){

    //this.arregloProductosImpresorasFilamento = this.cardServiceProducto.recuperarProductos('Impresoras filamento');

  };


  ngOnInit(): void {
    
  }

}
