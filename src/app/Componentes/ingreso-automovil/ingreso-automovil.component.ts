import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-ingreso-automovil',
  templateUrl: './ingreso-automovil.component.html',
  styleUrls: ['./ingreso-automovil.component.css']
})
export class IngresoAutomovilComponent implements OnInit {

  formIngreso:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private CrudService:CrudService,
    private ruteador:Router
    ) { 

    this.formIngreso=this.formulario.group({
      hora_entrada:[''],
      Placa:[''],
      marca:[''],
      color:[''],
      tipo:[''],
      cobro:[''],
      estado:['']
    });
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    const contador = interval(10000)
    var n = 0 ;
    var l = 0;
    contador.subscribe((n)=>{
      console.log(`cada ${n} segundos`);
    });
      if (n == 60) {
        l = l+1
      }
    

    console.log(`cada ${l} minutos`);
    console.log("Me presionaste");
    console.log(this.formIngreso.value);
    this.CrudService.agregarVehiculo(this.formIngreso.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('/registros-automovil')
    });
  }
}
