import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { detailEquipe } from 'src/app/core/model/detailEquipe';
import { Equipe } from 'src/app/core/model/equipe';
import { FileTypeLabelMapping, Niveau } from 'src/app/core/model/niveau.enum';
import { DetailEquipeService } from 'src/app/core/service/detail-equipe.service';
import { EquipeService } from 'src/app/core/service/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  public equipe: Equipe;
  selected = 'option2';

  public action:string;
  public file = FileTypeLabelMapping;
  public niveaux = Object.values(Niveau);
  equipeD : detailEquipe[] ;

  constructor(private detailService : DetailEquipeService, private equipeService:EquipeService,
   private route: Router, private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.detailService.getDetailEquipe().subscribe(data=>{
      this.equipeD=JSON.parse(JSON.stringify(data))
      console.log(this.equipeD)
    });

    
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
   if(this.action='Update'){
      this.equipeService.updateEquipe(this.equipe).subscribe(
        ()=>this.route.navigate(['equipe/listequipes']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}

      )
    } else{
    this.equipeService.addEquipe(this.equipe).subscribe(
      ()=>this.route.navigate(['equipe/listequipes']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}
      })}
  }

}
