import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './partials/side-menu/side-menu.component';
import { TopMenuComponent } from './partials/top-menu/top-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { NewPostComponent } from './pages/posts/new-post/new-post.component';

const routes:Routes = [
	{
		path:"",
		component:HomeComponent
	},
	{
		path:"posts",
		component:PostsComponent
	},
	{
		path:"posts/new",
		component:NewPostComponent
	},
	{
		path:"albums",
		component:AlbumsComponent
	}
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    HomeComponent,
    PostsComponent,
    AlbumsComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
