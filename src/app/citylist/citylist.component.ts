import { Component, OnInit } from '@angular/core';
import { EventsComponent } from '../events/events.component';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss']
})
export class CitylistComponent implements OnInit {
  events=[];
  lastDate:string="";
  demoEventsBar:number= 0;
  cityName:string="";
  constructor(private eventsComponent: EventsComponent,private activatedRoute:ActivatedRoute,private dataSer:DataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { this.cityName = this.splitPascalCase(params['location'] || ''); });
    this.lastDate = "";
    this.demoEventsBar = 0;
  }


  closeFlip() {
       this.eventsComponent.closeFlip();
   }

   splitPascalCase(word) {
    var wordRe = /($[a-z])|[A-Z][^A-Z]+/g;
    return word.match(wordRe).join(" ");
  }

   showDemoEvents( date:string ,index:number):boolean {
    if(index == 0)
    this.demoEventsBar=0;

    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;

    // Convert both dates to milliseconds
    var date1_ms = new Date().getTime();
    var date2_ms = new Date(date).getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    var days= Math.round(difference_ms/one_day);

    if(days > 90)
    this.demoEventsBar++;

    return days > 90 && this.demoEventsBar== 1?true:false;
  }

   checkDate(date:string, index:number):boolean{
    if(index == 0)
     this.lastDate = "";

    if(this.lastDate == ""){
        this.lastDate =date;
        return true;
    }
    else{
      if(date==this.lastDate){
        return false;
      }
      else{
        this.lastDate =date;
        return true;
      }

    }

   }


}
