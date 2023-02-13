import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentUsageComponent } from './custom-component-usage.component';

describe('CustomComponentUsageComponent', () => {
  let component: CustomComponentUsageComponent;
  let fixture: ComponentFixture<CustomComponentUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComponentUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
