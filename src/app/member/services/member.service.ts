import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestService } from 'src/app/shared/services/rest.service';
import { MEMBER_API_URL } from '../constants/member.constant';
import { Member } from '../models/member';
import { SearchParams } from '../models/search-params';

@Injectable()
export class MemberService {

  constructor(private restService: RestService) { }

  getMembers(params:SearchParams) :  Observable<Member[]>  {
    return this.restService.get(MEMBER_API_URL.GET_MEMBERS,params);
  }

}
