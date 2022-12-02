import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/core/model/equipe';
import { Niveau } from 'src/app/core/model/niveau';
import { EquipeService } from 'src/app/core/service/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  public equipe: Equipe;
  public action:string;
  constructor(private equipeService:EquipeService,
   private route: Router, private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    let id=this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action='Update'
      this.equipeService.getEquipeById(id).subscribe(
        (data: Equipe)=>{this.equipe=data}
      )
    }else{
      this.action='Add new'
      this.equipe=new Equipe()
    }
  }
  saveEquipe(){
    if(this.action="Update"){
      this.equipeService.updateEquipe(this.equipe).subscribe(
        ()=>this.route.navigate(['equipe/listequipes']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}

      )
    }
    this.equipeService.addEquipe(this.equipe).subscribe(
      ()=>this.route.navigate(['equipe/listequipes']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}

    )
  }

}
