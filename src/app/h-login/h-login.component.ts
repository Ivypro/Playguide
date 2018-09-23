import { Component, OnInit } from '@angular/core';
declare var enterOnTimeOut:any, enter:any;

@Component({
  selector: 'app-h-login',
  templateUrl: './h-login.component.html',
  styleUrls: ['./h-login.component.scss']
})
export class HLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('panelpopid').style.display = "none";

  }

}
