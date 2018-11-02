import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
declare var enterOnTimeOut:any, enter:any, loginFunction:any;


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
    // Style Norms
    var x = document.getElementsByClassName("dash-background");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "opacity: 0;"); };
    document.getElementById('bg-blur').style.backgroundImage = "url('assets/pgBack12.jpg')";
    document.getElementById('content').style.backgroundImage = "url('assets/pgBack12.jpg')";
    // Params
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
