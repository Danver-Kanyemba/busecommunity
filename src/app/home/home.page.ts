import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: any = ['e',2,2,2,2];

  constructor() {}
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
}
