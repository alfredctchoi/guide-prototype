import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bi-drection-nav',
  templateUrl: './bi-drection-nav.component.html',
  styleUrls: ['./bi-drection-nav.component.css']
})
export class BiDrectionNavComponent implements OnInit {

  step: number = 0;
  totalStepsArray: any[];
  totalStepsInt: number;

  @Input()
  totalSteps: string = '0';

  @Output()
  onNext: EventEmitter<any> = new EventEmitter();

  @Output()
  onPrev: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.totalStepsInt = parseInt(this.totalSteps);
    this.totalStepsArray = new Array(this.totalStepsInt);
  }

  next(event: MouseEvent): void {
    event.preventDefault();
    if (this.step >= this.totalStepsInt - 1) return;
    this.step++;
    this.onNext.emit(this.step);
  }

  prev(event: MouseEvent): void {
    event.preventDefault();
    if (this.step <= 0) return;
    this.step--;
    this.onPrev.emit(this.step);
  }
}
