import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  baseApiUrl: string;

  constructor( private http: HttpClient) { 
    this.baseApiUrl = environment.api_URL.baseURL;
  }

  get(apiURL: string, params?: any): Observable<any> {
    return this.http.get((this.baseApiUrl) + apiURL, { params }).
          pipe(map(result => { return result ? result : null;  }), catchError(err => of(err)));
  }
}
