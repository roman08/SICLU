import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Menú',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Administración',
          url: '/dashboard/administrator-list',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Contacto',
          url: '/dashboard',
          roles: [{ name: 'Lider' }],
        },
      ],
    },
  ];
  constructor() {}
}
