import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class GroupsForCommunityService {
  groupsCollection$;
  constructor(
    private db: AngularFireDatabase

  ) {
    this.groupsCollection$ = this.db.list('/groupsCollection').valueChanges();

  }
}
