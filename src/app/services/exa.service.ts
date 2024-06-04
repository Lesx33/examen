import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  impresion(): void {
    console.log("Hola Mundo");
  }
}
