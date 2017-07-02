import { Component, OnInit } from '@angular/core';

declare const jQuery:any;

@Component({
	selector: 'app-new-album',
	templateUrl: './new-album.component.html',
	styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	public openPostModal():void {
		jQuery('#postModal').modal('open');
	}

	public onSelectPost():void {
		jQuery('#postModal').modal('close');
	}

}
