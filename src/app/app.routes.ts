import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
  { path: '', redirectTo: '/booking', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent },

  { path: '**', redirectTo: '/booking' },
];
