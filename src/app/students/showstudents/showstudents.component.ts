import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/service/model/student';
import { StudentsService } from 'src/app/service/students.service';


@Component({
  selector: 'app-showstudents',
  templateUrl: './showstudents.component.html',
  styleUrls: ['./showstudents.component.css']
})
export class ShowstudentsComponent implements OnInit {
  liststudents:any
  data:any
  constructor(private studentservice:StudentsService,private HttpClient:HttpClient) {
   
   }

  ngOnInit(): void {
  this.studentservice.getstudent().subscribe(data=>{
      
    this.liststudents=JSON.parse(JSON.stringify(data));
    console.log(this.liststudents);
  
  }
 
  

  )
  
 
  
   
  }
  public delete(student:Student)
  {
    let i = this.liststudents.indexOf(student);
    console.log(student);
    this.studentservice.deletstudent(student.idEtudiant).subscribe(
      ()=>this.liststudents.splice(i,1)
    )
  }


}
