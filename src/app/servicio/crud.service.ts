import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from './Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/Parqueadero/';
  constructor(private clienteHttp:HttpClient) { }

  agregarVehiculo(datosVehiculo:Vehiculo):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosVehiculo);
  }
  obtenerVehiculo(){
    return this.clienteHttp.get(this.API);
  }
  salidaVehiculo(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  editarVehiculo(id:any,datosVehiculo:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosVehiculo);
  }
  buscarVehiculo():Observable<any>{
    return this.clienteHttp.get(this.API+"?buscador=");
  }
}
