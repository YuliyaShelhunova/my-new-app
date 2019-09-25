import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  public data: Node[];

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    console.log("OnInit");
    this.data = this.myService.getData();
  }

}
