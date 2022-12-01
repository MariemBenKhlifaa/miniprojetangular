import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  //contrats:[]
  data:any
  constructor(private HttpClient:HttpClient) { }
  getcontrat(){
  return this.HttpClient.get("http://localhost:8081/getcontrat");
}
}