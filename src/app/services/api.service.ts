import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>('https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json');
  }

}
