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

  getPost(id: number) {
     return this.serverService
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .map(post => this.normalizesPost(post))
    .do(post => this.fetchUser(post.userId))
    //return this.posts.find(post => post.id === id)
  }

  getPosts() {
    this.serverService
    .get('https://jsonplaceholder.typicode.com/posts')
    .map(posts => this.normalizesPosts(posts))
    .do(posts => this.fetchUsers(posts))
    .subscribe(posts => {
      this.posts = posts
    })
  }


  getFilteredPost(query: string) {
    if(!this.posts) { return []}
    return this.posts.filter(post => {
      return post.title.toLowerCase().includes(query.toLowerCase())
    })
  }

fetchUser(id) {
    return  this.usersService.getUser(id)
  }

  fetchUsers(posts) {
    const ids = new Set(posts.map(post => post.userId));
    Array.from(ids)
    .forEach(id => {
        this.fetchUser(id)
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
