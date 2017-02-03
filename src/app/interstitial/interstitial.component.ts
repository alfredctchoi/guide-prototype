import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.css']
})
export class InterstitialComponent implements OnInit {

  slides: any[] = [{
    background: 'black',
    left: 0,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit.'
  },{
    background: 'red',
    left: 570,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla.'
  },{
    background: 'blue',
    left: 1140,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet.'
  },{
    background: 'aqua',
    left: 1710,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo.'
  },{
    background: 'green',
    left: 2280,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec.'
  }];

  constructor() { }

  ngOnInit() {
  }

  onNext(step){
      this.slides.forEach((slide) => {
        slide.left -= 570;
      });
  }

  onPrev(step){
    this.slides.forEach((slide) => {
      slide.left += 570;
    });
  }

}
