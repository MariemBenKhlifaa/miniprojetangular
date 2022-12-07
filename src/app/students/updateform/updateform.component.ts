import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {
updateForm:FormGroup
option = ['SE','SIM','Gamix','NIDS']
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm=new FormGroup({
      nom:new FormControl(""),
      prenom:new FormControl(""),
      
      

    }

    
    )
  }


}
