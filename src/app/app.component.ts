import { Component, OnInit } from '@angular/core';

import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase2';
  students: any;
  studentName: String = "";
  studentAge: number = 0;
  studentAddress: String = "";

  constructor(private CrudService: CrudService) { }

  ngOnInit() {
    this.CrudService.read_Student().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          Data: e.payload.doc.data()
        };
      })
    })
  }

  removeRecord(id: String) {
    this.CrudService.delete_Student(id);
  }

  createRecord() {
    let record = {
      Name: this.studentName,
      Age: this.studentAge,
      Address: this.studentAddress
    };
    this.CrudService.create_NewStudent(record).then(resp => {
      this.studentName = "";
      this.studentAge = 0;
      this.studentAddress = "";
      console.log(resp);
    }).catch(error => {
      console.log(error);
    });
  }
}
