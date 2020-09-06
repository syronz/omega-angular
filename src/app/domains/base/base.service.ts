import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private http: HttpClient,
  ) {}

  getRoles(): Observable<any> {
    return this.http.get<any>(env.apiURL + 'roles?select=bas_roles.name,bas_roles.id');
  }
}
