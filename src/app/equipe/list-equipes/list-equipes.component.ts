import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/core/service/equipe.service';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {
  listequipes:any
  data:any
  constructor(private equipeService:EquipeService,private HttpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.equipeService.getequipe().subscribe(data=>{
      
      this.listequipes=JSON.parse(JSON.stringify(data));
      console.log(this.listequipes);
    
    })
  }

}
