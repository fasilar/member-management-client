import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SearchParams } from '../models/search-params';

@Injectable()
export class MemberDataService {
  public _appliedFilter = new Subject<SearchParams>();
  constructor() { }


  get searchParams() {
    return this._appliedFilter.asObservable();
  }

  applyFiler(searchParams: SearchParams) {
    return this._appliedFilter.next(searchParams);
  }

}
