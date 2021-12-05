import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRouteConstants } from '../shared/constants/shared.constant';
import { MemberComponent } from './components/member/member.component';

const routes: Routes = [
  {
    path: AppRouteConstants.DEFAULT,
    component: MemberComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
