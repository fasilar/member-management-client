import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Member } from '../../models/member';
import { SearchParams } from '../../models/search-params';
import { MemberDataService } from '../../services/member-data.service';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit,OnDestroy {
  
  destroyed$ = new Subject<any>();
  loading = false;
  members = [] as Member[];
  
  constructor(private memberService:MemberService,private memberDataService:MemberDataService) { 
   this.subcribeSearchParamChanges();
  }


  subcribeSearchParamChanges(){
    this.memberDataService.searchParams.pipe(takeUntil(this.destroyed$)).subscribe(searchParams => {
      if (searchParams) { 
        this.getMembers(searchParams); 
      }
    });
  }

  ngOnInit(): void {
  }

  getMembers(params:SearchParams){
    this.members = [];
    if(!params.PolicyNumber && !params.MemberCardNumber) return;
    this.loading = true;
    this.memberService.getMembers(params).subscribe(members => {
        this.members = members;
        this.loading = false;
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
