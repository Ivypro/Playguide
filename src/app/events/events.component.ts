import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
declare var enterOnTimeOut:any, enter:any;


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

flipList = false;
data:any=[];
  constructor(private activatedRoute: ActivatedRoute,private dataSer:DataService) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params)=>{
      if(params.location != undefined){
        this.data= this.dataSer.getEventsPosts(params['location'])
        enter();
        enterOnTimeOut(500);
        
      }
    })
  }


  openFlip() {
    console.log('Open Flip Called')
      document.getElementById('infoid').style.display = "none";
      this.flipList=true;
      // this.flipList=!this.flipList;
      // if(this.flipList){
        // console.log('expecting list to show')
      // }
      // else {
        // console.log('expecting info to show')
      // }
  }
  closeFlip() {
    console.log('Close Flip Called')
    this.flipList=false;
    document.getElementById('infoid').style.display = "";

  }

}
