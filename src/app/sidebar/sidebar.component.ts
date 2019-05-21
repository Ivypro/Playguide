import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

// import { DashioComponent } from '../dashio/dashio.component';


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


closeOnSmall() {
  if($(window).width() <= 600){

            $('.cover').css('transition', '1s')
            $('.cover').css('opacity', '0')
            setTimeout(function(){
              $('#sidelayer1, #sidebar, #content').toggleClass('active');
              setTimeout(function(){
                $('.cover').css('transition', '0s')
                $('.cover').css('opacity', '1')
              }, 500);
            }, 500);

       }}

// TESTING

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
