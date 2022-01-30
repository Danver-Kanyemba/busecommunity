import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {
  items: any = ['e',2,2,2,2];
  isThumbsUpVisible= 1;


  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  hi(){
    console.log(
      'testok'
    );

  }

  hi2(fugazy: any){
    console.log(
      fugazy
    );

  }

  onClick(voted: number){
    this.isThumbsUpVisible = 0;

    if (voted === 1) {
      console.log('voted for Danver');
    }

    if(voted===2) {
      console.log('voted for Danver');
    }
}

}
