import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
declare const jQuery: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit(): void {
		jQuery('.button-collapse').sideNav({
			menuWidth: 300, // Default is 300
			edge: 'left', // Choose the horizontal origin
			closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			draggable: true, // Choose whether you can drag to open on touch screens,
		});
	}
	title = 'app works!';
	public openSidenav(): void {

	}
}
