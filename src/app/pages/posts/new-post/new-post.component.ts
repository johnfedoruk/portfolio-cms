import { Component, OnInit } from '@angular/core';

declare const jQuery: any;

const NEW_ALBUM:string = "NEW_ALBUM";
const SEL_ALBUM:string = "SEL_ALBUM";

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

	public album_input_type:string = NEW_ALBUM;
	public NEW_ALBUM:string = NEW_ALBUM;
	public SEL_ALBUM:string = SEL_ALBUM;

	constructor() { }

	ngOnInit() {
	}

	public openAlbumModal(): void {
		jQuery('#albumModal').modal('open');
	}

	public onOpenNewAlbum():void {
		this.album_input_type = NEW_ALBUM;
	}

	public onOpenSelectAlbum():void {
		this.album_input_type = SEL_ALBUM;
	}

	public onSaveAlbum():void {

		jQuery('#albumModal').modal('close');
	}

	public onSelectAlbum():void {
		
		jQuery('#albumModal').modal('close');
	}

}
