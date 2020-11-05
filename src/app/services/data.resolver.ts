import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataResolver implements Resolve<any> {
  constructor(private api: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.api.getData();
  }
}
