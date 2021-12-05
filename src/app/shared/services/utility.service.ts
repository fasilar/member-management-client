import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  
  constructor() { 
  }

  //return a date added/substracted by days/months
  public static getDate(days?: number, months?: number, date?: Date): Date {
    if (!date) {
      date = new Date();
    } else {
      date = new Date(date);
    }
    if (months) {
      date.setMonth(date.getMonth() + months);
    }
    if (days) {
      date.setDate(date.getDate() + days);
    }
    return date;
  }

  public static getDateDifference(date1:Date,date2:Date,inMinutes = true): number {
    if(inMinutes) {
        var diff = (date2.getTime() - date1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));
    }
    //we can implement by hours or seconds later 
    return 0;
  }
}


