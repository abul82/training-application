import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-cmp',
  templateUrl: './directive-cmp.component.html',
  styleUrls: ['./directive-cmp.component.css']
})
export class DirectiveCmpComponent implements OnInit {

  @Input() data:string 
  
  constructor() { }

  ngOnInit(): void {
  }

}
