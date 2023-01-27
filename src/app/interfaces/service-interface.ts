import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


export interface ServiceInterface {
    get(page: number, search: string): Observable<any>
    find(id: string): Observable<any>
    create(data:any): Observable<any>;
    update(data:any,id:string): Observable<any>;
    delete(id: string): Observable<any>
}
