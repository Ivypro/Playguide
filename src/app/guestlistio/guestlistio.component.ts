import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-guestlistio',
  templateUrl: './guestlistio.component.html',
  styleUrls: ['./guestlistio.component.scss']
})
export class GuestlistioComponent implements OnInit {

ifGuestlist = false;

  constructor() { }

  ngOnInit() {
  }

  xGuestlist() {
      this.ifGuestlist=false;
      $('#buttonio').css('display', '');
      $('#buttonio2').css('display', 'none');
  }

  atGuestlist() {
      this.ifGuestlist=true;
      $('#buttonio').css('display', 'none');
      $('#buttonio2').css('display', 'block');
  }

  atGuestlist2() {
      this.ifGuestlist=false;
      $('#buttonio').css('display', '');
      $('#buttonio2').css('display', 'none');

  }

}
