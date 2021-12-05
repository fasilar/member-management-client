import { Component, OnInit } from '@angular/core';

import { REGEX } from 'src/app/shared/constants/shared.constant';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { SearchParams } from '../../models/search-params';
import { MemberDataService } from '../../services/member-data.service';

@Component({
  selector: 'member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  REGEX = REGEX;
  searchPrams = {} as SearchParams;
  minServiceDate = UtilityService.getDate(-30);
  maxServiceDate = UtilityService.getDate(30);

  constructor(private memberDataService: MemberDataService) { }

  ngOnInit(): void {
  }

  onSearch = () => {
    this.memberDataService.applyFiler(this.searchPrams)
  }

  reset = () => {
    this.searchPrams = {} as SearchParams;
  }

}
