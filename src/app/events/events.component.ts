import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
declare var $:any, enterOnTimeOut:any, enter:any;


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
     document.getElementById('panelpopid').style.display = "none";
    // Style Norms
    var x = document.getElementsByClassName("dash-background");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "opacity: 0;"); };
    document.getElementById('bg-blur').style.backgroundImage = "url('assets/pgBack12.jpg')";
    document.getElementById('content').style.backgroundImage = "url('assets/pgBack12.jpg')";
    // comingsoon & slogan
    $('.enter-act1').css('display', '');
    $('.enter-act2').css('display', '');
    // Loader
    $('.loader').css('opacity', '1');
    setTimeout(function(){
    $('.loader').css('opacity', '0');
    }, 1250);
    setTimeout(function(){
    $('.material').css('display', 'block');
    }, 1850);
    // Params - TOOLKIT
    this.activatedRoute.params.subscribe((params:Params)=>{
      if(params.location != undefined){
        this.data= this.dataSer.getEventsPosts(params['location'])
        // enter();
        // enterOnTimeOut(500);

      }
    })
  }

  openFlipM() {
    if($(window).width() <= 600){

    console.log('IF WIDTH Open Flip Called')
      document.getElementById('infoid').style.display = "none";
      this.flipList=true;

         }


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
