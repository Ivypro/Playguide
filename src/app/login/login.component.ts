import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
    document.getElementById('panelpopid').style.display = "none";
    // Style Norms
    var x = document.getElementsByClassName("dash-background");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "opacity: 0;"); };
    document.getElementById('bg-blur').style.backgroundImage = "url('assets/pgBack12.jpg')";
    document.getElementById('content').style.backgroundImage = "url('assets/pgBack12.jpg')";
  }

}
