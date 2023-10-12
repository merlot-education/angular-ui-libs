import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDashboardUiComponent } from './m-dashboard-ui.component';

describe('MDashboardUiComponent', () => {
  let component: MDashboardUiComponent;
  let fixture: ComponentFixture<MDashboardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDashboardUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDashboardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
