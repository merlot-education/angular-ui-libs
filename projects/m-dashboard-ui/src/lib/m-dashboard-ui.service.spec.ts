import { TestBed } from '@angular/core/testing';

import { MDashboardUiService } from './m-dashboard-ui.service';

describe('MDashboardUiService', () => {
  let service: MDashboardUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MDashboardUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
