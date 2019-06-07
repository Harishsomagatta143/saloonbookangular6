import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaloon } from './app.addsaloon';

describe('AddsaloonComponent', () => {
  let component: AddSaloon;
  let fixture: ComponentFixture<AddSaloon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSaloon ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaloon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
