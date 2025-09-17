import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  newObs$=of([1,2,3,4,5,6,7]);
  newInterval=interval(1000);
  newTimer=timer(7000);
  constructor() {
    this.newObs$.pipe(map(arr=>arr.filter(value=>value%2==0))).subscribe(value=>{
      console.log(value);
    });
    this.newInterval.pipe(take(7)).subscribe(value=>{
      console.log(value);
    });
    this.newTimer.subscribe(value=>{
      console.log("timer",value);
    });
  }   

}
