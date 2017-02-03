/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BiDrectionNavComponent } from './bi-drection-nav.component';

describe('BiDrectionNavComponent', () => {
  let component: BiDrectionNavComponent;
  let fixture: ComponentFixture<BiDrectionNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiDrectionNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiDrectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
