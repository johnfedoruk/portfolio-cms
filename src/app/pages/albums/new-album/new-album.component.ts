import { Component, OnInit } from '@angular/core';

declare const jQuery:any;

const POST_MODAL:string = "#postModal";
const MEDIA_MODAL:string = "#mediaModal";
const DEL_MEDIA_MODAL:string = "#deleteMediaModal";

@Component({
	selector: 'app-new-album',
	templateUrl: './new-album.component.html',
	styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

	public cards:any[] = [];
	public media_file:string;
	public media_title:string;
	public media_description:string;
	public media_path:string;
	private editing_media:any;
	public delete_index:number;

	constructor() { }

	ngOnInit() {
	}

	public onOpenPostModal():void {
		jQuery(POST_MODAL).modal('open');
	}

	public onOpenMediaModal(card:any=null):void {
		if(card) {
			this.editing_media = card;
			this.media_title = card.title;
			this.media_description = card.description;
		}
		else
			this.editing_media = null;
		jQuery(MEDIA_MODAL).modal('open');
	}

	public onOpenDeleteMediaModal(index:number):void {
		this.delete_index = index;
		jQuery(DEL_MEDIA_MODAL).modal('open');
	}

	public onSelectPost():void {
		this.onExitModal(POST_MODAL);
	}

	public onDeleteMedia():void {
		this.cards.splice(this.delete_index,1);
		this.delete_index = null;
		this.onExitModal(DEL_MEDIA_MODAL);
	}

	public onSaveMedia():void {
		if(this.editing_media) {
			// update the media
			this.editing_media.title = this.media_title;
			this.editing_media.description = this.media_description;
		}
		else {
			// save the new media
			this.cards.push({
				title:this.media_title,
				description:this.media_description
			});
		}
		this.media_file = null;
		this.media_title = null;
		this.media_description = null;
		this.media_path = null;
		this.media_file = null;
		this.onExitModal(MEDIA_MODAL);
	}

	public onFileAttach($event):void {
		console.log($event.srcElement.files[0]);
		setTimeout(()=>{
			this.media_path = "Uploading..";
		},10);
		setTimeout(()=>{
			this.media_path = "Uploaded!";
			this.media_file = $event.srcElement.files[0].name;
		},2000);
	}

	public onExitModal(id:string):void {
		console.log(id);
		let modal = jQuery(id);
		modal.removeClass("open");
		modal.fadeOut();
	}

}
