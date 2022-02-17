import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoriesDataService {
  stories$;
  constructor(
    private db: AngularFireDatabase
    ) {
      this.stories$ = this.db.list('/stories').valueChanges();
    }
  }
