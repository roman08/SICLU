import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { BillinguePipe } from '../pipes/billingue.pipe';
import { AuthModule } from '../auth/auth.module';
import { CoinsPipe } from '../pipes/coins.pipe';
import { AdministratorListComponent } from './administrators/administrator-list/administrator-list.component';
import { UploadPdfComponent } from './upload-pdf/upload-pdf.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    PagesComponent,
    AccountSettingsComponent,
    BillinguePipe,
    CoinsPipe,
    AdministratorListComponent,
    UploadPdfComponent,
  ],
  exports: [
    PagesComponent,
    AccountSettingsComponent,
    materialModules,
    BillinguePipe,
    CoinsPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    materialModules,
    ReactiveFormsModule,
    FileUploadModule,
    NgChartsModule,
    NgxPaginationModule,
    AuthModule,
  ],
  entryComponents: [],
})
export class PagesModule {}
