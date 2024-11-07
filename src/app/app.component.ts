import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import moment from 'moment';
import { SharedModule } from './shared.module';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-nail-fe';
}
