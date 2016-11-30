import { Component } from '@angular/core';
import {PostsService} from './posts.service'
import {UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private postsService : PostsService,
  private usersService: UsersService) {
    this.postsService.getPosts();
  }

query: string = '';

  getAuthorName(id) { console.log('id', this.usersService.users[id])
    return this.usersService.users[id] ?
    this.usersService.users[id].name :
     'n/a';
  }



}
