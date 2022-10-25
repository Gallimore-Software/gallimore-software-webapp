import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProudComponent } from './proud.component';

describe('ProudComponent', () => {
  let component: ProudComponent;
  let fixture: ComponentFixture<ProudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
