import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ServiceInterface} from "../interfaces/service-interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ContactService implements ServiceInterface{

  private endpoint: string = 'contacts';
  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.url}/${this.endpoint}`, data);
  }
  get(page: number = 1, search: string = ''): Observable<any> {
    const _search = search == '' ? '' : `&filter[contact]=${search}`;
    return this.http.get(`${environment.url}/${this.endpoint}?page=${page}${_search}`);
  }

  find(id: string): Observable<any> {
    return this.http.get(`${environment.url}/${this.endpoint}/${id}`);
  }

  update(data: any, id:string): Observable<any> {
    return this.http.put(`${environment.url}/${this.endpoint}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.url}/${this.endpoint}/${id}`);
  }
}
