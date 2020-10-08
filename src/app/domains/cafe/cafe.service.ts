import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(
    private http: HttpClient,
  ) {}

  getFoods(): Observable<any> {
    return this.http.get<any>(env.apiURL + 'foods');
  }

  getActiveFoods(): Observable<any> {
    return this.http.get<any>(env.apiURL + "foods?filter=caf_foods.status[eq]'active'&order_by=caf_foods.name&direction=asc&page_size=10000");
  }

  saveOrder(data: any): Observable<any> {
    return this.http.post<any>(env.apiURL + 'orders', data);
  }
}
