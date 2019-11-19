import {Component, OnInit} from '@angular/core';
import {interval, timer} from 'rxjs';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './countDownTimer.component.html',
  styleUrls: ['./countDownTimer.component.scss']
})
export class CountDownTimerComponent implements OnInit {

  private countDownDate: number;
  public daysLeft: number;
  public hoursLeft: number;
  public minutesLeft: number;
  public secondsLeft: number;

  constructor() {
  }

  ngOnInit(): void {
    this.countDownDate = new Date(2020, 9, 26, 0, 0, 0).getTime();
    timer(0, 1000).subscribe(
      () => {
        this.recalculateDaysLeft();
      });
  }

  recalculateDaysLeft(): void {
    const distance = this.countDownDate - new Date().getTime();

    this.daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutesLeft = Math.floor(distance % ((1000 * 60 * 60)) / (1000 * 60));
    this.secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
