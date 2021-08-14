import { Injectable } from '@angular/core';

@Injectable({    // in component this injectable decorator is automatically enabled
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
