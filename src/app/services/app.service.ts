import { Injectable } from '@angular/core';
import { API_END_POINT } from '../enviroment';
import { MasterService } from './master.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public apiURL = API_END_POINT;
  decodedToken: any;
  currentUser: any;

  constructor(private master: MasterService, private http: HttpClient) {}

  GetCategories() {
    return this.http.get(`${this.apiURL}api/booking/category`);
  }

  GetUsers() {
    return this.http.get(`${this.apiURL}api/booking/users`);
  }

  CreateCalendar(model: any) {
    return this.http.post(`${this.apiURL}api/booking/create`, model);
  }

  GetCalendar(model: any) {
    return this.http.get(
      `${this.apiURL}api/booking/get-calendar?staffId=${model.staffId}&start=${model.start}&end=${model.end}`
    );
  }

  GetGallery() {
    return this.http.get(`${this.apiURL}api/category/gallery`);
  }
}
