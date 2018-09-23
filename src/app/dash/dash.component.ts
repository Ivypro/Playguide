import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  plus = '+';
  tickets:string="";

  constructor(private dataSer:DataService) { }

  ngOnInit() {
  }

  calculateCharge(price:number){
  if(this.tickets==""){
    return price;
  }
  else{
   
    return price *  parseInt(this.tickets);

  }

  }

  reset(){
    this.tickets="";
  }
  
  fun(){
    
    console.log( 
      
      this.dataSer.selectedEvent
    );
}
}
