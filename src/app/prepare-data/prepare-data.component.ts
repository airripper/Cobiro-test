import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {AlertsService} from '../services/alerts.service';

@Component({
  selector: 'app-prepare-data',
  template: `<app-members-listing [listing]="listing" [title]="title"></app-members-listing>`
})
export class PrepareDataComponent implements OnInit {

  listing: object[];
  title: string;

  constructor(
    public api: ApiService,
    public alert: AlertsService
  ) {
  }

  dataPreparation(input) {
    return input.data[0].attributes.memberCards;
    // Static JSON, do getting data manually.
    // But this small function is for show, that data can be transform not only in Subscriber.
  }

  ngOnInit(): void {
    this.api.getData().subscribe(
      (response) => {
        const data = this.dataPreparation(response);
        this.listing = Object
          .keys(data)
          .map((k) => data[k]);
        this.title = response.data[0].attributes.title;
      },
      (error) => {
        this.alert.error(error);
      }
    );
  }


}
