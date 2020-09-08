import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private http: HttpClient,
  ) {}

  delete(url): Observable<any> {
    return this.http.delete<any>(env.apiURL + url);
  }

}
