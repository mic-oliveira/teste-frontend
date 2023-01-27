import { Injectable } from '@angular/core';
import {ServiceInterface} from "../interfaces/service-interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactTypeService implements ServiceInterface{
  private endpoint: string = 'contact-types'
  constructor(private http: HttpClient) { }

  delete(id: string): Observable<any> {
    return undefined;
  }

  find(id: string): Observable<any> {
    return undefined;
  }

  get(page: number, search: string): Observable<any> {
    return this.http.get(`${environment.url}/${this.endpoint}`)
  }

  create(data: any): Observable<any> {
    return undefined;
  }

  update(data: any, id: string): Observable<any> {
    return undefined;
  }
}
