import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './countDownTimer.component.html',
  styleUrls: ['./countDownTimer.component.scss']
})
export class CountDownTimerComponent implements OnInit {

  private countDownDate: Date;
  public daysLeft: number;
  public hoursLeft: number;
  public minutesLeft: number;
  public secondsLeft: number;

  constructor() {
  }

  ngOnInit(): void {
    this.countDownDate = new Date(2020, 8, 26, 0, 0, 0);
    timer(0, 1000).subscribe(
      () => {
        this.recalculateDaysLeft();
      });
  }

  recalculateDaysLeft(): void {
    const distance = this.countDownDate.getTime() - new Date().getTime();

    this.daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutesLeft = Math.floor(distance % ((1000 * 60 * 60)) / (1000 * 60));
    this.secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
