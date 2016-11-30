import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { ServerService} from './server.service'

@Injectable()
export class UsersService {
  users= {};

  constructor(private serverService: ServerService) { }

    getUser(id) {
            this.serverService.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .subscribe(user => {
              this.users[user.id] = user
            })
        }

}
