import {Component, OnInit} from '@angular/core';
import {Link} from "./interfaces/link.interface";
import {Node} from "./interfaces/node.interfacce";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links!: Link[];
  nodes!: Node[];

  onNodeSelect($event: any): void {
    console.log($event);
  }

  ngOnInit(): void {
    this.links = [
      {
        id: 'a',
        source: 'first',
        target: 'second',
        label: 'is parent of'
      }, {
        id: 'b',
        source: 'first',
        target: 'third',
        label: 'custom label'
      }
    ];

    this.nodes = [
      {
        id: 'first',
        label: 'A'
      }, {
        id: 'second',
        label: 'B'
      }, {
        id: 'third',
        label: 'C'
      }
    ];
  }
}
