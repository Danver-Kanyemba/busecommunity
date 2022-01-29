import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {
  items: any = ['e',2,2,2,2];


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

  openMenu(){
    this.menu.open('menu');
  }
}
