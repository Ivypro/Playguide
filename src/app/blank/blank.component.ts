import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  posts$: Object;


   constructor(private data: DataService) { }


   ngOnInit() {
     document.getElementById('panelpopid').style.display = "";
    /*
     this.data.getPosts().subscribe(
       data => this.posts$ = data
     ); */
   }

}
