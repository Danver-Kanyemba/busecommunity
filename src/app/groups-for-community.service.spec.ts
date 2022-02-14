import { TestBed } from '@angular/core/testing';

import { GroupsForCommunityService } from './groups-for-community.service';

describe('GroupsForCommunityService', () => {
  let service: GroupsForCommunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsForCommunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
