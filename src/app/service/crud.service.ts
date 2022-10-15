import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireStore: AngularFirestore) { }

create_NewStudent(record:{}){
  return this.fireStore.collection('Student').add(record);
}

read_Student(){
  return this.fireStore.collection('Student').snapshotChanges();
}

delete_Student(id:String){
  return this.fireStore.doc('Student/'+id).delete();
}

}
