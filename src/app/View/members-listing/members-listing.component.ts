import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-members-listing',
  templateUrl: './members-listing.component.html'
})
export class MembersListingComponent implements OnInit {

  @Input() listing;
  @Input() title;

  constructor() { }

  ngOnInit(): void {
  }

}
