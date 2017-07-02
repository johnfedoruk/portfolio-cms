import { Component, OnInit } from '@angular/core';

declare const jQuery:any;

const POST_MODAL:string = "#postModal";

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
		jQuery(POST_MODAL).modal('open');
	}

	public onSelectPost():void {
		jQuery(POST_MODAL).modal('close');
	}

}
