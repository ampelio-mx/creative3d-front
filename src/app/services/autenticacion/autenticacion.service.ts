import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProspectos } from './../../interfaces/formulario.interface';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private apiUrl = 'http://localhost:8080/api/controladorProspectos';
  private apiUrlListar = 'http://localhost:8080/api/listarProspectos';

  constructor(private http: HttpClient) { }

  enviarFormulario(interfazProspectos: IProspectos):Observable<any> {
   return this.http.post<any>(this.apiUrl, interfazProspectos);
  }

  listarDatosFormularioProspectos(): Observable<any>{
    return this.http.post<IProspectos>(this.apiUrlListar, {});
  }


}
