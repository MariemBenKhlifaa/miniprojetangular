import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  listcontrats:any
  data:any
  constructor(private contratservice:ContratService,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.contratservice.getcontrat().subscribe(data=>{
      
      this.listcontrats=JSON.parse(JSON.stringify(data));
      console.log(this.listcontrats);
    
    }
)
   
}
delete(c: Contrat) {
  let i = this.listcontrats.indexOf(c);
this.contratservice.deleteContrat(c.idContrat).subscribe(
    ()=>this.listcontrats.splice(i, 1)
  )
}
}
