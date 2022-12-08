import { Component, OnInit } from '@angular/core';
import { Niveau } from '../core/model/niveau.enum';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  public niveauEnum = Niveau;

  constructor() { }

  ngOnInit(): void {
  }

}
