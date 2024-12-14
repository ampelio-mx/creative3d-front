import { Component, OnInit } from '@angular/core';
import {IProductos} from './../../interfaces/productos.interface';
import { CardsTiendaService } from '../../services/cards-tienda-online/cards-tienda.service';

@Component({
  selector: 'app-tienda-online-impresoras-resina',
  templateUrl: './tienda-online-impresoras-resina.component.html',
  styleUrl: './tienda-online-impresoras-resina.component.scss'
})
export class TiendaOnlineImpresorasResinaComponent implements OnInit{

  arregloProductosImpresorasResina : IProductos[] = [];

  constructor(private cardServiceProducto: CardsTiendaService){

    //this.arregloProductosImpresorasResina = this.cardServiceProducto.recuperarProductos('Impresoras resina');

  };


  ngOnInit(): void {
    
  }

}
