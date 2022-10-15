import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesWeUseComponent } from './technologies-we-use.component';

describe('TechnologiesWeUseComponent', () => {
  let component: TechnologiesWeUseComponent;
  let fixture: ComponentFixture<TechnologiesWeUseComponent>;

  beforeEach(async(() => {
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
