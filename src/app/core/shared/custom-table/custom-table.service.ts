import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomTableService {

  constructor(
    private http: HttpClient,
  ) {}

  getList(url: string, params: any): Observable<any> {
    // return this.http.get<any>(env.apiURL + url);
    console.log(">>>>>>>>>>>>>>>>>>4", params);
    return this.http.get<any>(env.apiURL + url, {params});
  }

}
