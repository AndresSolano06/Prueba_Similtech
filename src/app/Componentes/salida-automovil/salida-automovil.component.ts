import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
@Component({
  selector: 'app-salida-automovil',
  templateUrl: './salida-automovil.component.html',
  styleUrls: ['./salida-automovil.component.css']
})
export class SalidaAutomovilComponent implements OnInit {
  formIngreso:FormGroup;
  elID:any;
  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private CrudService:CrudService,
    private ruteador:Router 
  ) { 
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.CrudService.salidaVehiculo(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formIngreso.setValue({
          hora_entrada:respuesta[0]['hora_entrada'],
          hora_salida:respuesta[0]['hora_salida'],
          Placa:respuesta[0]['Placa'],
          marca:respuesta[0]['marca'],
          color:respuesta[0]['color'],
          tipo:respuesta[0]['tipo'],
          cobro:respuesta[0]['cobro'],
          estado:respuesta[0]['estado']
        });
      }
    );
      this.formIngreso=this.formulario.group(
        {
          hora_entrada:[''],
          hora_salida:[''],
          Placa:[''],
          marca:[''],
          color:[''],
          tipo:[''],
          cobro:[''],
          estado:['']
        });
  }
  
  ngOnInit():void {
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formIngreso.value);
    this.CrudService.editarVehiculo(this.elID,this.formIngreso.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/registros-automovil');
    });
  }


}
