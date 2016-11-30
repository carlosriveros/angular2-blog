import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DateComponent } from './date/date.component';
import { HeadingComponent } from './heading/heading.component';
import { IconHeartComponent } from './icon-heart/icon-heart.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsService } from './posts.service';
import { ServerService } from './server.service';
import { UsersService} from './users.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DateComponent,
    HeadingComponent,
    IconHeartComponent,
    PostsListComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  PostsService,
   ServerService,
   UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
