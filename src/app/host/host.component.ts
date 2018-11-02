import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

bal = '0';

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
    // blur step
    document.getElementById('bg-blur').style.backgroundImage = "url('assets/pgBack44.jpg')";
    // comingsoon
    $('.cityitemsoon').css('display', 'none');
  }


}
