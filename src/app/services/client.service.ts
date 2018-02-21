import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Client } from '../Models/Client';

@Injectable()
export class ClientService {
  membersCollection: AngularFirestoreCollection <Client>;
  membersDoc: AngularFirestoreDocument<Client>;
  members: Observable<Client[]>;
  member: Observable<Client>;

  constructor(private afs: AngularFirestore) { 
    this.membersCollection = this.afs.collection('members');
  }

  getMembers(): Observable<Client[]> {
    this.members = this.membersCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
        return data;
      });
    });

    return this.members;
  } 

  newMember(client: Client) {
      this.membersCollection.add(client); 
  }

}
