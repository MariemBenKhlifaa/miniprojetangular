import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { Router ,ActivatedRoute} from '@angular/router';
import { ContratService } from 'src/app/core/services/contrat.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  public contrat: Contrat;
  public action:string;

  constructor( private contratservice:ContratService ,
    private route: Router, private currentRoute:ActivatedRoute) { }

  ngOnInit(): void { 
     let id=this.currentRoute.snapshot.params['id'];
  if(id!=null){
    this.action='Update'
    this.contratservice.getContratById(id).subscribe(
      (data: Contrat)=>{this.contrat=data}
    )
  }else{
    this.action='Add new'

    this.contrat=new Contrat();

  }
}
  saveContrat(){  
     if(this.action="Update"){
    this.contratservice.updateContrat(this.contrat).subscribe(
      ()=>this.route.navigate(['contrat/listcontrat']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}

    )
  }
    
    this.contratservice.addContrat(this.contrat).subscribe(()=>this.route.navigate(['contrat/listcontrat']),()=>{console.log('error'),
    ()=>{console.log('complete')}}
)
  }
  

}
