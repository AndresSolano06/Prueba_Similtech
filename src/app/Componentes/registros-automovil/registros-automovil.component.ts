import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-registros-automovil',
  templateUrl: './registros-automovil.component.html',
  styleUrls: ['./registros-automovil.component.css']
})
export class RegistrosAutomovilComponent implements OnInit {
  Vehiculos:any;
  constructor(
    private crudService:CrudService
  ) { 
  }
  filterPost='';

  ngOnInit(): void {
    this.crudService.obtenerVehiculo().subscribe(respuesta=>{
      console.log(respuesta);
      this.Vehiculos=respuesta;
    });

  }
  downloadPDF() {
    // Extraemos el
    const DATA:any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_Reporte.pdf`);
    });


}}
