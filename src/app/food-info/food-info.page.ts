import { Component, OnInit } from '@angular/core';
import { FoodDataService } from '../food-data.service';

@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.page.html',
  styleUrls: ['./food-info.page.scss'],
})
export class FoodInfoPage implements OnInit {
  foodCollection$;
  constructor(
    private foodService: FoodDataService
  ) { }

  ngOnInit() {
    this.foodCollection$ = this.foodService.foodCollection$;
  }

}
