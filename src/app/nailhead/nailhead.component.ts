import { Component, OnInit } from '@angular/core';
import { EventsComponent } from '../events/events.component';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
declare var currentDiv: any;

@Component({
  selector: 'app-nailhead',
  templateUrl: './nailhead.component.html',
  styleUrls: ['./nailhead.component.scss']
})
export class NailheadComponent implements OnInit {

  constructor(private eventsComponent: EventsComponent, private activatedRoute: ActivatedRoute, private dataSer: DataService) { }
  ngOnInit() {
   

  }


  openFlip() {
    this.eventsComponent.openFlip();
  }

  currentNailDiv(i: number) {
  //  currentDiv(i);
    this.dataSer.selectedItem(this.dataSer.events[i]);
  }

  //  plusDiv(index){
  //  this.dataSer.plusDiv(index,this.photoes.length);
  //  }

}
