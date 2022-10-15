import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesWeUseItemComponent } from './technologies-we-use-item.component';

describe('TechnologiesWeUseItemComponent', () => {
  let component: TechnologiesWeUseItemComponent;
  let fixture: ComponentFixture<TechnologiesWeUseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesWeUseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesWeUseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
