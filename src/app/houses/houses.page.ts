import { HousesListService } from './../houses-list.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
    private housesList: HousesListService,
    private toastController: ToastController
    ) { }

  ngOnInit() {
    this.lightIndustry = this.housesList.lightIndustry;
    this.shashiView = this.housesList.shashiView;
    this.chiwaridzo = this.housesList.chiwaridzo;
    this.aerodrome = this.housesList.aerodrome;
    this.clustersAndTownCenter = this.housesList.clustersAndTownCenter;
  }

  async noMoreHouses(){
    const toast = await this.toastController.create({
      message: 'no more houses list completed',
      position: 'bottom',
      duration: 3000,
      buttons: [
        {
        side: 'end',
        icon: 'close',
        role: 'cancel'
        }
      ]
    });
    toast.present();
  }

  showMorelight(){
    if (this.lightMax<this.lightIndustry.length) {
      this.lightMax+=3;
    } else {
      this.noMoreHouses();

    }
  }
  showMoreShashiView(){
    if (this.shashiMax < this.shashiView.length) {
      this.shashiMax+=3;
    } else {
      this.noMoreHouses();

    }
  }
  showMoreChiwaridzo(){
    if (this.chiwaridzoMax < this.chiwaridzo.length) {
      this.chiwaridzoMax+=3;
    } else {
      this.noMoreHouses();

    }
  }
  showMoreAerodrome(){
    if (this.aerodromeMax < this.aerodrome.length) {
      this.aerodromeMax+=3;
    } else {
      this.noMoreHouses();

    }
  }
  showMoreClustersAndTownCenter(){
    if (this.clustersMax < this.clustersAndTownCenter.length) {
      this.clustersMax+=3;
    } else {
      this.noMoreHouses();

    }
  }
  contactHouse(contact){
    window.open(
      'https://wa.me/+263'+contact
    );
  }
}
