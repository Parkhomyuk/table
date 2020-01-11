import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  _baseUrl: string= "https://restcountries-v1.p.rapidapi.com/all";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this._baseUrl,{headers:{
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "66c5ffa382msh332e82e68c8c3eap1219f8jsn982eb2021733"
    }});
  }
}
