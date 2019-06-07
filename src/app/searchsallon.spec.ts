import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSaloon } from './app.searchsaloon';

describe('DashboardComponent', () => {
  let component: SearchSaloon;
  let fixture: ComponentFixture<SearchSaloon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSaloon ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSaloon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
