import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Node } from '../entity/node';

@Component({
  selector: 'app-record-nodes',
  templateUrl: './record-nodes.component.html',
  styleUrls: ['./record-nodes.component.css']
})
export class RecordNodesComponent implements OnInit {

  @Input() nodes: Node[];
  constructor() { }

  ngOnInit() { }
}
