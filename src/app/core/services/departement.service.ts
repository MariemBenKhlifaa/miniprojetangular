import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  departements:[]
  data:any
  constructor(private HttpClient:HttpClient) { }
  getalldep(): Observable<Departement> {{
  const universiteUrl='http://localhost:8081/getalldep';
  return this.HttpClient.get<Departement>(universiteUrl);
    //  console.log(this.students);
       
    
}}
}
