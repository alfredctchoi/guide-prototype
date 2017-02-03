/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterstitialComponent } from './interstitial.component';

describe('InterstitialComponent', () => {
  let component: InterstitialComponent;
  let fixture: ComponentFixture<InterstitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterstitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterstitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
