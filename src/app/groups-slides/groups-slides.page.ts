import { GroupsForCommunityService } from './../groups-for-community.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-slides',
  templateUrl: './groups-slides.page.html',
  styleUrls: ['./groups-slides.page.scss'],
})
export class GroupsSlidesPage implements OnInit {
  slideOpts={  initialSlide:0 };
  groupsCollection$;
  groupLoadingNumber=[1,2,3,4,5,6,7];

  constructor(
    private groupsCollectionService: GroupsForCommunityService
  ) { }

  ngOnInit() {
    this.groupsCollection$ = this.groupsCollectionService.groupsCollection$;
  }
}
