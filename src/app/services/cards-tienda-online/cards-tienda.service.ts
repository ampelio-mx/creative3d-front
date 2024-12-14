import { Injectable } from '@angular/core';
import { IProductos } from './../../interfaces/productos.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsTiendaService {

  private urlEndPointListarProductos = 'http://localhost:8080/api/listarProductos';
  private urlEndPointGuardarProductosDatos ='http://localhost:8080/api/guardarProductos';

  constructor(private http: HttpClient) {
  
   }

  consultarTodosProdutos(): Observable<any>{
    return this.http.get<IProductos>(this.urlEndPointListarProductos, {});
  }

  guardarProductos(producto: Partial<IProductos>, archivoImagen: File): Observable<IProductos>{

    const formData = new FormData();

    formData.append('categoriaProducto', producto.categoriaProducto || '');
    formData.append('nombreProducto', producto.nombreProducto || '');
    formData.append('tamanoProducto', producto.tamanoProducto || '');
    formData.append('precioProducto', producto.precioProducto?.toString() || '0');
    formData.append('colorProducto', producto.colorProducto || '');
    formData.append('cantidadProducto', producto.cantidadProducto?.toString() || '0');
    formData.append('archivoImagen', archivoImagen); 
    
    return this.http.post<IProductos>(this.urlEndPointGuardarProductosDatos, formData);
  }



}
