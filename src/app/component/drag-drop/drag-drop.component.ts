import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  items = ['Dhoni','Kohli','Rohit Sharma','Axar Patel', 'Shreyas Iyer', 'Kuldeep Yadav',
   ' Mohammed Siraj','Mayank Agarwal','Priyank Panchal','Ravindra Jadeja',
   'Hanuma Vihari'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

 
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

}
