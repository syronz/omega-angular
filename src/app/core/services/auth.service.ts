import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  resources: string;

  private apiBaseUrl = `/api/cloud/${environment.apiVersion}`;
  constructor(private http: HttpClient) {
    this.resources = localStorage.getItem('resources');
  }

  login(loginPayload: any): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}login`, loginPayload);
  }

  setAcl(v): void {
    this.resources = v;
  }

  getAcl(): string {
    return this.resources;
  }

  checkPerm(resource: string): boolean {
    console.log(">>>>>>>>>>", this.resources);
    return this.resources.includes(resource);
  }

  checkPermAll(...resources): boolean {
    for (const el of resources) {
      if (!this.checkPerm(el)) {
        return false;
      }
    }

    return true;
  }

  checkPermAny(...resources): boolean {
    for (const el of resources) {
      if (this.checkPerm(el)) {
        return true;
      }
    }

    return false;
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    localStorage.removeItem('session');
    localStorage.removeItem('resources');
    localStorage.removeItem('language');
    return this.http.post<any>(`${environment.apiURL}logout`, {});
  }

}
