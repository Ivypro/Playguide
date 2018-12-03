import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menu() {
    $('.menu-obj').toggleClass('active');
    $('.menu-obj-cov').toggleClass('hide');
  }

}
