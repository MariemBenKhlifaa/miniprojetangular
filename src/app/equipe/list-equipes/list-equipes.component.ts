import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { detailEquipe } from 'src/app/core/model/detailEquipe';
import { Equipe } from 'src/app/core/model/equipe';
import { DetailEquipeService } from 'src/app/core/service/detail-equipe.service';
import { EquipeService } from 'src/app/core/service/equipe.service';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {
  listequipes: Equipe[]
  nomEquipe;

  constructor(private equipeService:EquipeService, private dS: DetailEquipeService, private HttpClient:HttpClient) {
  }

  customSearchFn( item: Equipe) {
    // check if the name startsWith the input, everything in lowercase so "a" will match "A" 
    return item.nomEquipe.toLowerCase().startsWith(this.nomEquipe.toLowerCase())
}

  ngOnInit(): void {
    this.equipeService.getEquipe().subscribe(data=>{
      this.listequipes=JSON.parse(JSON.stringify(data))});
  }

  delete(e: Equipe) {
    let i = this.listequipes.indexOf(e);
    this.equipeService.deleteEquipe(e.idEquipe).subscribe(
      ()=>this.listequipes.splice(i, 1))
  }

}
