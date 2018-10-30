import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { SecurityComponent } from '../security/security.component';
import { Router } from "@angular/router";


declare var $:any

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {}

   // cities=[];

  ngOnInit() {
}

  testTs() {
    console.log('Router test');
      this.router.navigate(['/hlogin']);
      setTimeout(() => {
      this.testTs5()
    }, 0);
  }

  testTs5() {
    // document.getElementById('changeme').setAttribute("style", "color: yellow;");
  $("#changeme").attr("style","color: yellow;");
  }

}
