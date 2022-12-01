import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  data:any
  constructor(private HttpClient:HttpClient) { }
  getequipe(){
    return this.HttpClient.get("http://localhost:8081/getequipe");
  }
}
