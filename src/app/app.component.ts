import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit(): void {
		$("#title").fadeOut(1000);
		setTimeout(()=>{
			$("#title").fadeIn(1000);
		},1000);
	}
	title = 'app works!';
}
