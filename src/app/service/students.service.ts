import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:[]
  data:any
  constructor(private HttpClient:HttpClient) { }
 getstudent(){
  return this.HttpClient.get("http://localhost:8081/getetudiant");
    //  console.log(this.students);
       
    
}
}
