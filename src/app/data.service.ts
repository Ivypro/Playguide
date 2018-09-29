import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shallowEqual } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // activatedIndex: number = 0;

  //===========events data==============
  currentPhotoIndex = 0;
  events: any = [];
  photoes = [];
  selectedEvent: any;
  currentImgUrl: string;
  isApi:boolean= false;

  constructor(private http: HttpClient) { }

  //===============to get data once only==============
  getEventsPosts(location) {
   if(this.isApi){
    this.http.get('https://my-json-server.typicode.com/ivypro/playguide-angular/posts').subscribe(
        (res: any) => {
          this.events = [];
          this.photoes = [];
          res = this.filterByCurrentDate(res);
          res= this.shortByDate(res);
          res.forEach(e => {
            if (e.location.replace(" ", "") == location) {
              this.events.push(e);
              this.photoes.push(e.images[0])
            }
          });
         console.log('res',res);
          if(this.events[0]){
            this.currentImgUrl = this.events[0].images[0];
            this.selectedEvent=this.events[0];
          }
          return this.events
        }
      )
   }
   else{

      this.http.get("/assets/db.json").subscribe(
        (res: any) => {
          this.events = [];
          this.photoes = [];
          res.posts = this.filterByCurrentDate(res.posts);
          res.posts= this.shortByDate(res.posts);
          res.posts.forEach(e => {
            if (e.location.replace(" ", "") == location) {
              this.events.push(e);
              this.photoes.push(e.images[0])
            }
          });
         console.log('res',res);
          if(this.events[0]){
            this.currentImgUrl = this.events[0].images[0];
            this.selectedEvent=this.events[0];
          }
          return this.events
        }
      )
   }
  }

  selectedItem(event) {
    this.currentPhotoIndex = 0;
    this.selectedEvent = event;
    this.currentImgUrl = this.selectedEvent.images[0];
  }

  shortByDate(items:any){
    //return items.sort((a: any, b: any) =>  new Date(a.date).getTime() - new Date(b.date).getTime());
	   return items.sort(function (a: any, b: any) {
      var l=this.dateConverter(a.date).getTime();
      var r=this.dateConverter(b.date).getTime();
      return (l < r) ? -1 : ((l > r) ? 1 : 0);
     }.bind(this));
  }

filterByCurrentDate(items: any) {
    var yesterday=new Date();
      yesterday.setDate(yesterday.getDate()-1)
    console.log(yesterday);
    return items.filter(a => (this.dateConverter(a.date).getTime() - yesterday.getTime()) > 0)
  }


  dateConverter(a) {
    var splittedDate = a.split("-");

    return new Date(splittedDate[2], Number(splittedDate[0]) - 1, splittedDate[1]);
  }




// Precusor for [e] typescrip // MATCH URL ABOVE (getEventsPosts)

  getPosts() {
    return this.http.get('https://my-json-server.typicode.com/ivypro/playguide-angular/posts')
    // return this.http.get('./assets/db.json')

  }


  getEvents() {
    console.log("events called")
    return this.events;
  }


  //nailhead arrow
  nailArrow(index) {
    var x = this.events.indexOf(this.selectedEvent);
    if (x < 0) {
      x = 0
      this.selectedEvent = this.events[0];
    }
    if (x + index < 0) {
      x = this.events.length ;
    } else if (x + index >= this.events.length) {
      x = -1
    }

    this.selectedItem(this.events[x + index])
    console.log(x + index);

  }

  //change photo in scanner
  changePhotoInScanner(i) {

    if (this.selectedEvent) {
      this.currentPhotoIndex += i;
      if (this.currentPhotoIndex >= this.selectedEvent.images.length) {
        this.currentPhotoIndex = 0;
      }
      if (this.currentPhotoIndex < 0) {
        this.currentPhotoIndex = this.selectedEvent.images.length - 1;
      }
      this.currentImgUrl = this.selectedEvent.images[this.currentPhotoIndex];
      console.log(this.currentPhotoIndex)
    } else {
      this.currentPhotoIndex += i;
      if (this.currentPhotoIndex >= this.events[0].images.length) {
        this.currentPhotoIndex = 0;
      }
      if (this.currentPhotoIndex < 0) {
        this.currentPhotoIndex = this.events[0].images.length - 1;
      }
      this.currentImgUrl = this.events[0].images[this.currentPhotoIndex];
      console.log(this.currentPhotoIndex)
    }
  }
}

// https://jsonplaceholder.typicode.com/
