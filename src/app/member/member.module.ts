import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemberRoutingModule } from './member-routing.module';

import { MemberSearchComponent } from './components/member-search/member-search.component';
import { MemberComponent } from './components/member/member.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { SharedModule } from '../shared/shared.module';
import { MemberService } from './services/member.service';
import { MemberDataService } from './services/member-data.service';

@NgModule({
  declarations: [
    MemberComponent, 
    MemberListComponent, 
    MemberSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MemberRoutingModule,
    SharedModule
  ],
  providers:
  [
    MemberService,
    MemberDataService
  ]
})
export class MemberModule { }
