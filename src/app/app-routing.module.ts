import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteConstants } from './shared/constants/shared.constant';

const routes: Routes = [
  {
    path: AppRouteConstants.DEFAULT, redirectTo: AppRouteConstants.MEMBER, pathMatch: 'full' 
  },
  {
    path: AppRouteConstants.MEMBER,
    loadChildren: () => import('./member/member.module').then(mod => mod.MemberModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
