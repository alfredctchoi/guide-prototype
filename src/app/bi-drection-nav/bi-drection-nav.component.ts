import {Component, OnInit, Input} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
    this.totalStepsInt = parseInt(this.totalSteps);
    this.totalStepsArray = new Array(this.totalStepsInt);
  }

  next(event: MouseEvent): void {
    event.preventDefault();
    this.step < this.totalStepsInt && this.step++;
  }

  prev(event: MouseEvent): void{
    event.preventDefault();
    this.step > 0 && this.step--;
  }
}
