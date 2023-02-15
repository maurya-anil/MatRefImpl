import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularDataHostComponent } from './tabular-data-host.component';

describe('TabularDataHostComponent', () => {
  let component: TabularDataHostComponent;
  let fixture: ComponentFixture<TabularDataHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularDataHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabularDataHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
