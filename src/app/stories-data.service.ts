import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
// import { map } from 'rxjs/operators';
// import
// import {Observable, combineLatest, of} from 'rxjs/';



@Injectable({
  providedIn: 'root'
})
export class StoriesDataService {
  stories2$;
  tem$;
  stories$;
  constructor(
    private db: AngularFireDatabase
    ) {
      this.stories$ = this.db.list('/stories').valueChanges();
      // this.tem$ = this.db.list('/stories2').valueChanges();

    //    this.tem$.switchMap(projects => {
    //     const userObservables = projects.map(project => this.db
    //     .object(`users/${project.userUid}`)
    //   );
    //   return userObservables.length === 0 ?
    //   of(projects):
    //   combineLatest(...userObservables, (...users) => {
    //     projects.forEach((project, index) => {
    //       project.userName = users[index].displayName;
    //       project.avatar = users[index].photoUrl;
    //     });
    //     return projects;
    //   });
    // });
  }


}
