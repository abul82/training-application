import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-framework-vote',
  templateUrl: './framework-vote.component.html',
  styleUrls: ['./framework-vote.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom 
})
export class FrameworkVoteComponent implements OnInit {

  @Input() logo : string;
  @Input() title: string;

  @Output() like = new EventEmitter<number>();
  @Output() dislike = new EventEmitter<number>();

  likeCount = 0;
  dislikeCount = 0;
  constructor() { }
  ngOnInit() {
  
  }

  vote(type : string){
    if(type==='like'){
      this.likeCount++;
      console.log(this.likeCount);
      this.like.emit(this.likeCount);
    }else{
      this.dislikeCount++;
      console.log(this.dislikeCount);
      this.dislike.emit(this.dislikeCount);
    }
  }

}
