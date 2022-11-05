import { Injectable } from '@angular/core';
import { Cafe  } from "../models/cafe";
import { HttpClient } from  '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(private http: HttpClient) { }


  /// Retorna  listado de cafe
  getListadoCafe( ) :Observable<Array<Cafe>> {
    return  this.http.get<Array<Cafe>>( environment.baseUrl );
  }





}
