import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WhatWeDoItemComponent } from './what-we-do-item.component';

describe('WhatWeDoItemComponent', () => {
  let component: WhatWeDoItemComponent;
  let fixture: ComponentFixture<WhatWeDoItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeDoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
