import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guestlistio',
  templateUrl: './guestlistio.component.html',
  styleUrls: ['./guestlistio.component.scss']
})
export class GuestlistioComponent implements OnInit {

ifGuestlist = true;

  constructor() { }

  ngOnInit() {
  }

  atGuestlist() {
      this.ifGuestlist=false;
  }

}
