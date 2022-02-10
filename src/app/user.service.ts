import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$: AngularFireObject<any[]> | undefined;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

  updateUserData(user){
    const data = {
      uid: user.uid,
      email: user.email,
      displayName:user.displayName,
      photoUrl: user.photoURL
    };
     this.db.object(`/users/${user.uid}`).set(data);

  }
}
