import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AlertsService} from './alerts.service';

@Injectable({ providedIn: 'root' })

export class HttpErrorInterceptor implements HttpInterceptor {
  errorMessage: string;
  constructor(
    public alert: AlertsService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          this.errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            this.errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            this.errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this.alert.error(this.errorMessage);
          return throwError(this.errorMessage);
        })
      );
  }
}
