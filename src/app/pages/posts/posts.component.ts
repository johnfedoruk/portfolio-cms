import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	public cards:number[] = [0,1,2,3,4,5,6,7,8];

	constructor() { }

	ngOnInit() {
	}

}
