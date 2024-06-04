import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggingService } from './services/exa.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'exa1';
  constructor(private loggingService: LoggingService) {
    this.loggingService.impresion()
}}
