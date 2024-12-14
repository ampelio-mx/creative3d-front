import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IProductos } from '../../interfaces/productos.interface';
import { CardsTiendaService } from '../../services/cards-tienda-online/cards-tienda.service';

@Component({
  selector: 'app-guardar-productos',
  templateUrl: './guardar-productos.component.html',
  styleUrl: './guardar-productos.component.scss'
})

export class GuardarProductosComponent {

  productoForm: FormGroup;
  archivoSeleccionado: File | null = null;

  constructor(private fb: FormBuilder, private productosService: CardsTiendaService) {
    
    this.productoForm = this.fb.group({
      categoriaProducto: ['', Validators.required],
      nombreProducto: ['', Validators.required],
      tamanoProducto: ['', Validators.required],
      precioProducto: ['', Validators.required],
      colorProducto: ['', Validators.required],
      cantidadProducto: ['', Validators.required],
      archivoImagen: [null, [Validators.required, this.validarArchivo]]
    });
    
  }
  validarArchivo(control: any): { [key: string]: any } | null {
    const archivo = control.value;
    if (archivo) {
      const tipoValido = ['image/jpeg', 'image/png', 'image/jpg'].includes(archivo.type);
      const tamanoValido = archivo.size <= 5 * 1024 * 1024; // 5 MB
      if (!tipoValido) {
        return { tipoInvalido: true };
      }
      if (!tamanoValido) {
        return { tamanoExcedido: true };
      }
    }
    return null;
  }
  
  onArchivoSeleccionado(event: any): void {
    // Guardamos el archivo seleccionado
    this.archivoSeleccionado = event.target.files[0];
    this.productoForm.patchValue({ archivoImagen: this.archivoSeleccionado });
    this.productoForm.get('archivoImagen')?.updateValueAndValidity();
  }

  guardarProducto(): void {
    if (this.productoForm.valid && this.archivoSeleccionado) {
      const formValues = this.productoForm.value;

      this.productosService
        .guardarProductos(formValues, this.archivoSeleccionado)
        .subscribe({
          next: (producto: IProductos) => {
            console.log('Producto guardado:', producto);
            alert('Producto guardado exitosamente');
          },
          error: (err) => {
            console.error('Error al guardar el producto:', err);
            alert('Hubo un error al guardar el producto');
          }
        });
    } else {
      alert('Por favor, completa todos los campos y selecciona un archivo.');
    }
  }

}
