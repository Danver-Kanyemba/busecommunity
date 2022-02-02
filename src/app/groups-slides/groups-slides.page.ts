import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-slides',
  templateUrl: './groups-slides.page.html',
  styleUrls: ['./groups-slides.page.scss'],
})
export class GroupsSlidesPage implements OnInit {
  slideOpts={  initialSlide:0 };
  groupsCollection=[
      {
        name: 'Houses',
        link: 'houses',
        isLocked: 0
      },
      {
        name: 'Ent',
        link: '',
        isLocked: 1
      },
      {
        name: 'SRC',
        link: '',
        isLocked: 1
      }
  ];

  constructor() { }

  ngOnInit() {
  }


}
