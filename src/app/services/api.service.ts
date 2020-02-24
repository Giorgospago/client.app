import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public base: string = environment.api;

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get<IResponse>(this.base + "categories");
  }

}
