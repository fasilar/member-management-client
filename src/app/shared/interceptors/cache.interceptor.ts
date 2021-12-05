import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { CachedResponse } from "../models/cached-response";
import { UtilityService } from "../services/utility.service";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache: Map<string, CachedResponse> = new Map()
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== "GET") {
      return next.handle(req)
    }
    const cachedResponse = this.cache.get(req.urlWithParams);
    if (cachedResponse && UtilityService.getDateDifference(cachedResponse.CachedDateTime, new Date()) < environment.ResponseCachingPeriod) {
      return of(cachedResponse.Response.clone())
    } else {
      if (cachedResponse) this.cache.delete(req.urlWithParams)
      return next.handle(req)
        .pipe(
          tap(event => {
            if (event instanceof HttpResponse) {
              this.cache.set(req.urlWithParams, { CachedDateTime: new Date(), Response: event.clone() });
            }
          })
        );
    }
  }
}