import { TestBed } from '@angular/core/testing';

import { IndoorRouteService } from './indoor-route.service';

describe('IndoorRouteService', () => {
  let service: IndoorRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndoorRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
