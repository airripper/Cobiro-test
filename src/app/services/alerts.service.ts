import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertsService {
  private subject = new Subject<any>();

  error(message: string) {
    this.subject.next({ type: 'error', text: message});
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
