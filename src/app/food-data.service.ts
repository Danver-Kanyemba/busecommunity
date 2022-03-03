import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  foodCollection$;
  constructor(
    private db: AngularFireDatabase

  ) {
    this.foodCollection$ = this.db.list('/food').valueChanges();

  }
}
