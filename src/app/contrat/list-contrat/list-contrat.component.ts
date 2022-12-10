import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { Specialite } from 'src/app/core/model/specialite';
import { ContratService } from 'src/app/core/services/contrat.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  
  @ViewChild('content',{static:false}) el!: ElementRef

  title = 'pdfapp';
  listcontrats:any
  contratList:any
  data:any
  contrat : Contrat
  constructor(private contratservice:ContratService,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.contratservice.getcontrat().subscribe(data=>{
      
      this.listcontrats=JSON.parse(JSON.stringify(data));
      console.log('list contrat: ',this.listcontrats);
    
    }
)
   
}

delete(c: Contrat) {
  let i = this.listcontrats.indexOf(c);
this.contratservice.deleteContrat(c.idContrat).subscribe(
    ()=>this.listcontrats.splice(i, 1)
  )
}


generatePDF(){

         let pdf = new jsPDF('p', 'pt', 'letter')   
    , specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function(element, renderer){           
            return true
        }
    }

    , margins = {
             top: 20,
             bottom: 20,
             left: 40,
             width: 1000
         };

    pdf.html(this.el.nativeElement,{
      callback:(pdf) => {
        pdf.save("output.pdf")
      }
    })
  }

}





