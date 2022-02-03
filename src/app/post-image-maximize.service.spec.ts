import { TestBed } from '@angular/core/testing';

import { PostImageMaximizeService } from './post-image-maximize.service';

describe('PostImageMaximizeService', () => {
  let service: PostImageMaximizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostImageMaximizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
