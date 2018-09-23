import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse  } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})
export class EComponent implements OnInit {

      public post_slug: string;
      public posts: any;
      public post = {};
      public loader = true;

      mobile = true
      sub:any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

  // if (window.screen.width > 560) { // 768px portrait
    // this.mobile = false;
  // }

  this.sub=  this.route.params.subscribe(params => { this.post_slug = params['post_slug'] || ''; });
          this.getPostBySlug();
  }

     getPostBySlug() {
        this.sub=  this.dataService.getPosts().subscribe(
             data => {
                 this.loader = false;
                 this.posts = data; // FILL THE ARRAY WITH DATA.
                 this.posts.forEach(item => {
                     if (this.post_slug.toLowerCase() === item.heading.toLowerCase().replace(/\s/g, '-')){
                       this.post = item;
                       this.dataService.selectedEvent=this.post;
                     }
                 });
             },
             (err: HttpErrorResponse) => {
                 console.log (err.message);
             }
         );
     }

     ngOnDestroy() {
        this.sub.unsubscribe()
      }

}
