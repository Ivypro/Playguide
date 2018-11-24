import { Component, OnInit } from '@angular/core';
declare var enterOnTimeOut:any, enter:any;

declare var $:any

@Component({
  selector: 'app-h-login',
  templateUrl: './h-login.component.html',
  styleUrls: ['./h-login.component.scss']
})
export class HLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('panelpopid').style.display = "none";
    // Step 2
    var x = document.getElementsByClassName("not-host");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "display: none"); };
    var x = document.getElementsByClassName("bg-host");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "display: block"); };
    // Blur Step
    document.getElementById('bg-blur').style.backgroundImage = "url('assets/pgBack44.jpg')";
    // comingsoon
    $('.cityitemsoon').css('display', 'none');
    // set tab
    if($(window).width() >= 1200){
    document.getElementById("set-rtab").click(); };
  }

  testTs2() {
    // document.getElementById('changeme').setAttribute("style", "color: green;");
    $("#changeme").attr("style","color: green;");

  }

}
