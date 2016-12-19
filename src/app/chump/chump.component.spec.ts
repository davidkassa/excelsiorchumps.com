/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChumpComponent } from './chump.component';

describe('ChumpComponent', () => {
  let component: ChumpComponent;
  let fixture: ComponentFixture<ChumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
