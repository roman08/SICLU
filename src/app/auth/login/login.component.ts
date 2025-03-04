import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private _srvAuth: AuthService,
    private _srvStorage: StorageService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.loginForm = this.formBuilder.group({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      // this.isLoading = false;
    }, 5000);
  }

  login() {
    // this.router.navigateByUrl('/dashboard/administrator-list');
    this.isLoading = true;
    const usuario = this.loginForm.value['usuario'];
    const password = this.loginForm.value['password'];

    this._srvAuth.login(usuario, password).subscribe((respuesta) => {
      if (respuesta.status === 'success') {
        this._srvStorage.set('user_data', respuesta['data']);
        this._srvStorage.set('token', respuesta['access_token']);
        this._srvStorage.set('user_id', respuesta['data']['id']);
        this._srvStorage.set('user_name', respuesta['data']['name']);
        this._srvStorage.set('img_profile', respuesta['data']['img_profile']);
        this._srvStorage.set('email', respuesta['data']['email']);

        this.router.navigateByUrl('/dashboard/administrator-list');
      } else {
        swal.fire('Siclu', respuesta.message, 'error');

        swal.fire({
          title: '<strong><u>SICLU</u></strong>',
          icon: 'error',
          html: respuesta.message,
          showCloseButton: true,
          showCancelButton: false,
          focusConfirm: false,
          confirmButtonText: 'Cerrar',
        });
      }
      this.isLoading = false;
    });
  }

  get usuario() {
    return this.loginForm.get('usuario');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
