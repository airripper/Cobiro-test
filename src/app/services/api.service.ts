import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data, Listing} from '../interfaces/data';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Listing> {
    return this.http.get<Data>('https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json')
      .pipe(
        map(
          (response) => {
            const incomingData: Data = {
              data: response,
              getListing(): object[] {
                const cards = this.data.data[0].attributes.memberCards;
                return Object
                  .keys(cards)
                  .map((k) => cards[k]);
              },
              getTitle(): string {
                return this.data.data[0].attributes.title;
              }
            };
            return {title: incomingData.getTitle(), list: incomingData.getListing()};
          }
        )
      );
  }

}
