import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
declare const jQuery: any;

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
		jQuery('.button-collapse').sideNav({
			menuWidth: 300, // Default is 300
			edge: 'left', // Choose the horizontal origin
			closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			draggable: true, // Choose whether you can drag to open on touch screens,
		});
	}

}
