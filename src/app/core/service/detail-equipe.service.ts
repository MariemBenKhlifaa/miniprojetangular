import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {
  data:any
  constructor(private HttpClient:HttpClient) { }
  getdetailequipe(){
    return this.HttpClient.get("http://localhost:8081/getdetailequipe");
  }
}
