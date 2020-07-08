import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudComponent } from './proud.component';

describe('ProudComponent', () => {
  let component: ProudComponent;
  let fixture: ComponentFixture<ProudComponent>;

  beforeEach(async(() => {
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
