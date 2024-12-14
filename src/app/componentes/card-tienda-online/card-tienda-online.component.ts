import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { IProductos } from '../../interfaces/productos.interface';
import { CardsTiendaService } from '../../services/cards-tienda-online/cards-tienda.service';

@Component({
  selector: 'app-card-tienda-online',
  templateUrl: './card-tienda-online.component.html',
  styleUrl: './card-tienda-online.component.scss'
})

export class CardTiendaOnlineComponent implements OnInit {

@Input() productosRecibidos: IProductos;

constructor(){
  this.productosRecibidos = {
    idProducto: 0,
    categoriaProducto: "",
    nombreProducto: "",
    tamanoProducto: "",
    precioProducto: 0,
    colorProducto: "",
    cantidadProducto: 0,
    imagenProductoURL: "",
  }
}
  ngOnInit(): void {
    

  }

}
