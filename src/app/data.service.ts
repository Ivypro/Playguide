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

  constructor(private http: HttpClient) { }

  //===============to get data once only==============
  getEventsPosts(location) {
   // this.http.get('https://my-json-server.typicode.com/ivypro/playguide-angular/posts').subscribe(
     // this.http.get('http://localhost:3000/posts').subscribe(
    this.http.get("/assets/db.json").subscribe(
      (res: any) => {
        this.events = [];
        this.photoes = [];
        // res= this.shortByDate(res);
        res.posts= this.shortByDate(res.posts);
         // res.forEach(e => {
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

  selectedItem(event) {
    this.currentPhotoIndex = 0;
    this.selectedEvent = event;
    this.currentImgUrl = this.selectedEvent.images[0];
  }

  shortByDate(items:any){
    return items.sort((a: any, b: any) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
);
  }








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
