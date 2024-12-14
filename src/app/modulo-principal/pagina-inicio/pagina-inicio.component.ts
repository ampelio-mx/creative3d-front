import { Component, AfterViewInit, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import { IProspectos } from '../../interfaces/formulario.interface';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.scss'
})

export class PaginaInicioComponent {

  //ESTILOS 3D CUBOS
  @ViewChildren('cuboizq', { read: ElementRef }) cubosizq!: QueryList<ElementRef>;
  @ViewChildren('cuboder', { read: ElementRef }) cubosder!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    // Iterar sobre todos los cubos seleccionados
    this.cubosizq.forEach((cubo: ElementRef) => {
      const cuboElement = cubo.nativeElement as HTMLElement;

      // Listener para el evento mousemove en cada cubo
      cuboElement.addEventListener('mousemove', (e: MouseEvent) => {
        const cuboRect = cuboElement.getBoundingClientRect();
        const x = e.clientX - cuboRect.left;
        const y = e.clientY - cuboRect.top;

        const rotateY = ((x / cuboRect.width) - 0.1) * 5;
        const rotateX = ((y / cuboRect.height) - 0.1) * -5;

        cuboElement.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      });

      // Listener para restablecer la rotación cuando el mouse salga del cubo
      cuboElement.addEventListener('mouseleave', () => {
        cuboElement.style.transform = `rotateY(0deg) rotateX(0deg)`;
      });
    });

    this.cubosder.forEach((cubo: ElementRef) => {
      const cuboElement = cubo.nativeElement as HTMLElement;

      // Listener para el evento mousemove en cada cubo
      cuboElement.addEventListener('mousemove', (e: MouseEvent) => {
        const cuboRect = cuboElement.getBoundingClientRect();
        const x = e.clientX - cuboRect.left;
        const y = e.clientY - cuboRect.top;

        const rotateY = ((x / cuboRect.width) - 0.1) * -5;
        const rotateX = ((y / cuboRect.height) - 0.1) * -5;

        cuboElement.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      });

      // Listener para restablecer la rotación cuando el mouse salga del cubo
      cuboElement.addEventListener('mouseleave', () => {
        cuboElement.style.transform = `rotateY(0deg) rotateX(0deg)`;
      });
    });

  }

  //EFECTOS PLACEHOLDER
  public placeholderText: string = ''; // Texto que se va mostrando
  private fullText: string = 'Agrega un mensaje por favor...'; // Texto completo del placeholder
  private currentIndex: number = 0; // Índice para controlar el progreso de

  typeEffect() {
    const typingSpeed = 100; // Velocidad de escritura en milisegundos

    const interval = setInterval(() => {
      if (this.currentIndex < this.fullText.length) {
        this.placeholderText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
      } else {
        clearInterval(interval); // Detiene el intervalo cuando se completa el texto
      }
    }, typingSpeed);
  }

  //VARIABLES TÍTULO FORMULARIO
  nombre: String = '';
  ngOnInit(): void {

    this.nombre = 'Contactanos';
    this.typeEffect();
  }
  
  //FORMULARIO
  prospectosFormGroup: FormGroup;

  constructor(private valoresFormularioServicio: AutenticacionService) {

    this.prospectosFormGroup = new FormGroup(
      {
        nombreProspecto: new FormControl('', Validators.required),
        telefonoProspecto: new FormControl('', Validators.required),
        emailProspecto: new FormControl('', [Validators.required, Validators.email]),
        mensajeProspecto: new FormControl('', Validators.required),

      }
    )
    
  }

  


  guardarValoresFormulario() {
    const prospecto: IProspectos = this.prospectosFormGroup.value;
    this.valoresFormularioServicio.enviarFormulario(prospecto).subscribe(response => {
      console.log(this.prospectosFormGroup.value);
      console.log('Respuesta del servidor:', response);
    });

  }

}
