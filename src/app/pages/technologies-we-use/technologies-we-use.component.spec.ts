import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TechnologiesWeUseComponent } from './technologies-we-use.component';

describe('TechnologiesWeUseComponent', () => {
  let component: TechnologiesWeUseComponent;
  let fixture: ComponentFixture<TechnologiesWeUseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesWeUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesWeUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
