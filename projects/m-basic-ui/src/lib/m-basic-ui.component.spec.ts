import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBasicUiComponent } from './m-basic-ui.component';

describe('MBasicUiComponent', () => {
  let component: MBasicUiComponent;
  let fixture: ComponentFixture<MBasicUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBasicUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBasicUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
