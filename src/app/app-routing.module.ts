import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoAutomovilComponent } from './Componentes/ingreso-automovil/ingreso-automovil.component';
import { SalidaAutomovilComponent } from './Componentes/salida-automovil/salida-automovil.component';
import { RegistrosAutomovilComponent } from './Componentes/registros-automovil/registros-automovil.component';


const routes: Routes = [

  {path: '',pathMatch:'full', redirectTo:'ingreso-automovil'},
  {path: 'ingreso-automovil', component:IngresoAutomovilComponent},
  {path: 'salida-automovil/:id', component:SalidaAutomovilComponent},
  {path: 'registros-automovil', component:RegistrosAutomovilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
