import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoAutomovilComponent } from './Componentes/ingreso-automovil/ingreso-automovil.component';
import { SalidaAutomovilComponent } from './Componentes/salida-automovil/salida-automovil.component';
import { RegistrosAutomovilComponent } from './Componentes/registros-automovil/registros-automovil.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IngresoAutomovilComponent,
    SalidaAutomovilComponent,
    RegistrosAutomovilComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
