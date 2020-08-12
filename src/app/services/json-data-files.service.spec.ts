import { TestBed } from '@angular/core/testing';

import { JsonDataFilesService } from './json-data-files.service';

describe('JsonDataFilesService', () => {
  let service: JsonDataFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonDataFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
