import { HousesListService } from './../houses-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.page.html',
  styleUrls: ['./houses.page.scss'],
})
export class HousesPage implements OnInit {

  lightIndustry: any;
  shashiView: any;
  chiwaridzo: any;
  aerodrome: any;
  clustersAndTownCenter: any;

  lightMax = 3;
  shashiMax = 3;
  chiwaridzoMax = 3;
  aerodromeMax = 3;
  clustersMax = 3;

  constructor(
    private housesList: HousesListService
    ) { }

  ngOnInit() {
    this.lightIndustry = this.housesList.lightIndustry;
    this.shashiView = this.housesList.shashiView;
    this.chiwaridzo = this.housesList.chiwaridzo;
    this.aerodrome = this.housesList.aerodrome;
    this.clustersAndTownCenter = this.housesList.clustersAndTownCenter;
  }

  showMorelight(){
    if (this.lightMax<this.lightIndustry.length) {
      this.lightMax+=3;
    } else {
      console.log('completed');

    }
  }
  showMoreShashiView(){
    if (this.shashiMax < this.shashiView.length) {
      this.shashiMax+=3;
    } else {
      console.log('completed');

    }
  }
  showMoreChiwaridzo(){
    if (this.chiwaridzoMax < this.chiwaridzo.length) {
      this.chiwaridzoMax+=3;
    } else {
      console.log('completed');

    }
  }
  showMoreAerodrome(){
    if (this.aerodromeMax < this.aerodrome.length) {
      this.aerodromeMax+=3;
    } else {
      console.log('completed');

    }
  }
  showMoreClustersAndTownCenter(){
    if (this.clustersMax < this.clustersAndTownCenter.length) {
      this.clustersMax+=3;
    } else {
      console.log('completed');

    }
  }
}
