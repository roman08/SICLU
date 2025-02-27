import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { AccesoGuard } from '../guards/acceso.guard';

import { ProfileComponent } from '../auth/profile/profile.component';
import { AdministratorListComponent } from './administrators/administrator-list/administrator-list.component';
import { UploadPdfComponent } from './upload-pdf/upload-pdf.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: 'administrator-list',
        component: AdministratorListComponent,
        data: { titulo: 'Administración' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'upload-pdf',
        component: UploadPdfComponent,
        data: { titulo: 'Carga de PDF' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'acount-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Temas' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { titulo: 'Mi perfil' },
        canActivate: [AccesoGuard],
      },

      //   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
