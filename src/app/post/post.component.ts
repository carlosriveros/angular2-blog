import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() author: string;
  @Input() date: string;

  @Input() likeCount: number;

  @Output() likeCountChange : EventEmitter<number> = new EventEmitter();

  addLike() {
    this.likeCountChange.emit(this.likeCount + 1);
   //this.likeCount + 1
  }
  
  isRed= true;

  constructor() { }

  ngOnInit() {
  }

}
