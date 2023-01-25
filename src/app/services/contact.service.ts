import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ServiceInterface} from "../interfaces/service-interface";

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ContactService implements ServiceInterface{

  private endpoint: string = 'contacts';
  constructor(private http: HttpClient) { }

  get(page: number = 1, search: string = '') {
    return this.http.get(`${environment.url}/${this.endpoint}?page=${page}&filter[contactSearch]=${search}`)
  }

  find(id: string) {
    return this.http.get(`${environment.url}/${this.endpoint}/${id}`)
  }
}
