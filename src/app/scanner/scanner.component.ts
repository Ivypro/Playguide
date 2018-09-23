import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  events=[];
  currentCity:string;
  constructor(private activatedRoute:ActivatedRoute,private dataSer:DataService) { }
  // imgUrl:string=this.dataSer.selectedEvent.images[this.dataSer.currentPhotoIndex]?this.dataSer.selectedEvent.images[this.dataSer.currentPhotoIndex]:this.dataSer.events[0].images[this.dataSer.currentPhotoIndex];
  ngOnInit() {
    // this.activatedRoute.params.subscribe((params:Params)=>{      
    //   this.dataSer.getPosts().subscribe(
    //     (res:any)=>{
    //       this.events=[];
    //       res.forEach(e => {
    //         if(e.location.replace(" ","")==params['location']){
    //           this.events.push(e);
    //         }
    //       });
    //      if(this.events[0].location){
    //        this.currentCity=this.events[0].location
    //      }else{
    //        this.currentCity="Silicon Valley"
    //      }
    //     console.log(this.events);

    //     }
    //   )
    // })
  }


}
