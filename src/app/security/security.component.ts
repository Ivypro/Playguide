import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('panelpopid').style.display = "none";
    // step 2
    var x = document.getElementsByClassName("not-sec");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "display: none"); };
    var x = document.getElementsByClassName("bg-sec");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "display: block"); };
    // Blur Step
    document.getElementById('bg-blur').style.backgroundImage = "url('assets/pgBack13.jpg')";
  }

}
