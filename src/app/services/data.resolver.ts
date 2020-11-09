import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Listing} from '../interfaces/data';

@Injectable({ providedIn: 'root' })
export class DataResolver implements Resolve<Listing> {
  constructor(private api: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Listing> {
    return this.api.getData();
  }
}
