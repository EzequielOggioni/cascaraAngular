import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }

   traerValores(){
     return this.http.get('http://localhost/provincias/Backend/'); 
   }
   traerValoresPost() :Observable<any>{
    return this.http.post('',{});
  }

}
