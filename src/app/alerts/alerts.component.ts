import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertsService} from '../services/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  messages: any;

  constructor(private alertsService: AlertsService) { }

  ngOnInit(): void {
    this.subscription = this.alertsService.getMessage().subscribe(message => {
      if (message) {
        if (!this.messages || (this.messages && this.messages.length === 0)) {
          this.messages = [];
        }
        this.messages.push(message);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
