import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';

import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NumbersOnlyInputDirective } from './directives/numbers-only.directive';
import { CacheInterceptor } from './interceptors/cache.interceptor';

@NgModule({
  declarations: [
    HeaderComponent, 
    NavigationBarComponent,
    NumbersOnlyInputDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    HeaderComponent, 
    NavigationBarComponent,
    NumbersOnlyInputDirective
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  }]
})
export class SharedModule { }
