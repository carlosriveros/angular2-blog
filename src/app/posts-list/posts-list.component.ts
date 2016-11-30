import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() posts: any[];

  constructor() { }

  ngOnInit() {
  }

}
