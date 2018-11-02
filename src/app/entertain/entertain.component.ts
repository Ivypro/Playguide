import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertain',
  templateUrl: './entertain.component.html',
  styleUrls: ['./entertain.component.scss']
})
export class EntertainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('panelpopid').style.display = "none";
    // step 2
    var x = document.getElementsByClassName("not-ent");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "display: none"); };
    var x = document.getElementsByClassName("bg-ent");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "display: block"); };
    // Blur Step
    document.getElementById('bg-blur').style.backgroundImage = "url('assets/pgBack11.jpg')";
  }

}
