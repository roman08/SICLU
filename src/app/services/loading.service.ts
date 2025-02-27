import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public isLoading = false;
  constructor() {}

  show() {
    console.log('loading');

    this.isLoading = true;
  }

  hide() {
    this.isLoading = false;
  }
}
