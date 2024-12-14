import { Component, OnInit } from '@angular/core';
import { IProspectos } from '../../interfaces/formulario.interface';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
@Component({
  selector: 'app-consultar-prospectos',
  templateUrl: './consultar-prospectos.component.html',
  styleUrl: './consultar-prospectos.component.scss'
})
export class ConsultarProspectosComponent implements OnInit {

  //LÓGICA FORMULARIO PROSPECTOS

  prospectos: IProspectos[] = [];

  constructor(private autenticacionServicio: AutenticacionService){}

  ngOnInit(): void {
    this.obtenerProspectos();
  }

  obtenerProspectos(): void{
    this.autenticacionServicio.listarDatosFormularioProspectos()
    .subscribe({
      next: (data: IProspectos[]) => {
        this.prospectos = data;  
      },
      error: (error) => {
        console.error('Error al obtener los prospectos', error);
      },
      complete: () => {
        console.log('Petición completada con éxito');
      }
    });
  }

}
