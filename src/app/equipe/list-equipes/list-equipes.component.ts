import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/service/equipe.service';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {
  listequipes: Equipe[]
  data:any
  constructor(private equipeService:EquipeService,private HttpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.equipeService.getEquipe().subscribe(data=>{
      
      this.listequipes=JSON.parse(JSON.stringify(data));
      console.log(this.listequipes);
    
    })
  }
  delete(e: Equipe) {
    let i = this.listequipes.indexOf(e);
    this.equipeService.deleteEquipe(e.idEquipe).subscribe(
      ()=>this.listequipes.splice(i, 1)
    )
  }

}
