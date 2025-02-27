import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Location } from '@angular/common';
import { InvoiceService } from 'src/app/services/invoice.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.css'],
})
export class UploadPdfComponent implements OnInit {
  file: File | null = null;
  previewData: any[] = []; // Datos para vista previa
  isLoading = false;

  // Lista de cabeceras esperadas en el orden correcto
  expectedHeaders: string[] = [
    'Razon social del cliente',
    'Correo',
    'Calle',
    'N. Exterior',
    'N. Interior',
    'Colonia',
    'Alcaldia',
    'Ciudad',
    'Codigo postal',
    'Pais',
    'RFC',
    'Total a pagar',
    'Pagar antes de',
    'Mes de facturacion',
    'Año de facturacion',
    'Numero de telefono',
    'Factura N',
    'Saldo anterior',
    'Cargos del mes',
    'Pago actual',
    'Pago redondeo',
    'Credito por redondeo',
    'Saldo al corte',
    'Monto servicio de telecomunicaciones',
    'IVA 16%',
    'IEPS 3%',
    'Total',
    'Cantidad en letra',
    'Observaciones',
    'Concepto',
    'Cargo por redondeo',
    'Pagos y abonos',
    'Descripcion',
    'Periodo',
  ];

  constructor(
    private location: Location,
    private _srvInvoice: InvoiceService
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
    this.uploadFile();
  }

  uploadFile(): void {
    if (!this.file) {
      alert('Por favor, selecciona un archivo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      let jsonData: any[] = [];

      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const rawJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (rawJson.length > 0) {
          const formattedData = this.formatData(rawJson);
          jsonData.push(formattedData);
        }
      });

      // Llamar al servicio API con el JSON
      this.previewData = jsonData.flat(); // Guardar para mostrar en tabla
    };
    reader.readAsArrayBuffer(this.file);
  }

  formatData(rawJson: any[]): any[] {
    const headers = rawJson[0];
    const body = rawJson.slice(1);

    // Mapa de cabeceras originales a números secuenciales
    const headerMap: {
      [key: string]: number;
    } = {};
    this.expectedHeaders.forEach((header, index) => {
      const actualIndex = headers.indexOf(header);
      if (actualIndex !== -1) {
        headerMap[header] = index + 1; // Se numeran desde 1
      }
    });

    return body.map((row) => {
      let formattedRow: any = {};
      this.expectedHeaders.forEach((header, index) => {
        const actualIndex = headers.indexOf(header);
        if (actualIndex !== -1) {
          formattedRow[headerMap[header]] =
            row[actualIndex] !== undefined && row[actualIndex] !== ''
              ? row[actualIndex]
              : 'N/A';
        } else {
          formattedRow[index + 1] = 'N/A';
        }
      });
      return formattedRow;
    });
  }

  sendToApi(): void {
    if (this.previewData.length === 0) {
      alert('No hay datos para enviar.');
      return;
    }

    this.isLoading = true;
    this._srvInvoice.create(this.previewData).subscribe((response) => {
      console.log(response);
      swal.fire('SICLU', response.message, response.status);
      this.location.back();
    });
  }

  back() {
    this.location.back();
  }
}
