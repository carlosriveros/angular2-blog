import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ServerService} from './server.service';
import { UsersService} from './users.service';
import 'rxjs/add/operator/do';

@Injectable()
export class PostsService {
  posts: any[];

  constructor(private serverService: ServerService,
  private usersService: UsersService) { }

    getPosts() {
            this.serverService
            .get('https://jsonplaceholder.typicode.com/posts')
            .map(posts => this.normalizesPosts(posts))
            .do(posts => this.fetchUsers(posts))
            .subscribe(posts => {
              this.posts = posts
            })
          }


fetchUsers(posts) {
  posts.forEach(post => {
      this.usersService.getUser(post.userId)
  })
}
      
normalizesPosts(posts) {
  return posts.map(this.normalizesPost)
}

    normalizesPost(post) {
      return Object.assign({}, post, {
        likeCount: 0,
        date: new Date()
      })
    }
    

    updateLikeCount(id, likeCount) {
    const index = this.posts.findIndex(post => id === post.id);
    this.posts[index].likeCount = likeCount;
    }

}
