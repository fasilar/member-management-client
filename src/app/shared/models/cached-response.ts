import { HttpResponse } from "@angular/common/http";

export interface CachedResponse {
    Response: HttpResponse<any>;
    CachedDateTime: Date;
}