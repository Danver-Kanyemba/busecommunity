import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class WhatsappDataService {
  whatsappGroups$;

  constructor(
    private db: AngularFireDatabase

  ) {
    this.whatsappGroups$ = this.db.list('/whatsappGroups').valueChanges();

   }
}
