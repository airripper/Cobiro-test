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

  ngOnInit(): void {
    this.api.getData().subscribe(
      (response) => {
        this.listing = response.list;
        this.title = response.title;
      },
      (error) => {
        this.alert.error(error);
      }
    );
  }


}
