import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-albums',
	templateUrl: './albums.component.html',
	styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

	public cards:number[] = [0,1,2,3,4,5,6,7,8];

	constructor() { }

	ngOnInit() {
	}

}
