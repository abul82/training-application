import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.css']
})
export class VirtualScrollingComponent implements OnInit {

  scrollItems: number[] = [];
  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.scrollItems.push(index);
    }
  } 

  ngOnInit(): void {
  }

}
