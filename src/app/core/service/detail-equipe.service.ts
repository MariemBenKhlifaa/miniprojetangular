import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detailEquipe } from '../model/detailEquipe';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {
  data:any
  constructor(private HttpClient:HttpClient) { }
  getdetailequipe(){
    return this.HttpClient.get("http://localhost:8081/getdetailequipe");
  }
  addDetailEquipe(d: detailEquipe){
    return this.HttpClient.post("http://localhost:8081/adddetailequipe", d);
  }
  deleteEquipe(id:number){
    return this.HttpClient.delete("http://localhost:8081/deletedetailequipe/"+id)
  }
  updateEquipe(d:detailEquipe){
    return this.HttpClient.put("http://localhost:8081/updatedetailequipe/"+d.idDetailEquipe,d)
  }
  getEquipeById(id:number){
    return this.HttpClient.get("http://localhost:8081/getundetail/"+id)
  }
}
