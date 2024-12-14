import { Component, OnInit } from '@angular/core';
import {IProductos} from './../../interfaces/productos.interface';
import { CardsTiendaService } from '../../services/cards-tienda-online/cards-tienda.service';

@Component({
  selector: 'app-tienda-online-filamentos',
  templateUrl: './tienda-online-filamentos.component.html',
  styleUrl: './tienda-online-filamentos.component.scss'
})
export class TiendaOnlineFilamentosComponent implements OnInit {

  interfazProductos: IProductos [] = [];

  constructor(private productosServicios: CardsTiendaService ){};

  ngOnInit(): void {
    
    this.listarProductos();

  }

  listarProductos(): void{
    this.productosServicios.consultarTodosProdutos()
    .subscribe({
      next: (data: IProductos[]) => {
        this.interfazProductos = data;  
      },
      error: (error) => {
        console.error('Error al obtener los prospectos', error);
      },
      complete: () => {
        console.log('Petición completada con éxito');
      }
    })
  }

}
