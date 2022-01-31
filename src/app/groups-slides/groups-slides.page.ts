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
        link: 'houses'
      },
      {
        name: 'Ent',
        link: ''
      },
      {
        name: 'SRC',
        link: ''
      }
  ];

  constructor() { }

  ngOnInit() {
  }


}
