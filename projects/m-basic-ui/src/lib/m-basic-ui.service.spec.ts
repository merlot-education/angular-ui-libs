import { TestBed } from '@angular/core/testing';

import { MBasicUiService } from './m-basic-ui.service';

describe('MBasicUiService', () => {
  let service: MBasicUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MBasicUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
