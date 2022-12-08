import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { detailEquipe } from 'src/app/core/model/detailEquipe';
import { DetailEquipeService } from 'src/app/core/service/detail-equipe.service';

@Component({
  selector: 'app-add-detail-equipe',
  templateUrl: './add-detail-equipe.component.html',
  styleUrls: ['./add-detail-equipe.component.css']
})
export class AddDetailEquipeComponent implements OnInit {
  public detail: detailEquipe;
  public action:string;

  constructor(private detailService:DetailEquipeService,
    private route: Router, private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
     
    let id=this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action='Update'
      this.detailService.getDetailEquipeById(id).subscribe(
        (data: detailEquipe)=>{this.detail=data}
      )
    }else{
      this.action='Add new'
      this.detail=new detailEquipe()
    }
  }
  saveDetail(){
    if(this.action="Update"){
      this.detailService.updateDetailEquipe(this.detail).subscribe(
        ()=>this.route.navigate(['detailEquipe/listdetail']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}

      )
    }
    this.detailService.addDetailEquipe(this.detail).subscribe(
      ()=>this.route.navigate(['detailEquipe/listdetail']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}

    )
  }

}
