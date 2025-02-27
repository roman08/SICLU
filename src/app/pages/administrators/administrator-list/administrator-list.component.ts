import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice.model';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-administrator-list',
  templateUrl: './administrator-list.component.html',
  styleUrls: ['./administrator-list.component.css'],
})
export class AdministratorListComponent implements OnInit {
  invoices: Invoice[] = [];
  isLoading = false;
  p: number = 1;
  constructor(private _srvInvoice: InvoiceService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this._srvInvoice.get().subscribe((response) => {
      if (response.status == 'success') {
        this.invoices = response.data;
      }

      this.isLoading = false;
    });
  }
}
