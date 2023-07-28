import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from './media-item.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = "";
  mediaItems: MediaItem[] = [];

  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute // Lets this module know which route is active
  ) { }
  
  ngOnInit(): void {
    // this.mediaItemService.get()
    //   .subscribe(mediaItems => {
    //     this.mediaItems = mediaItems;
    //   });
    // this.getMediaItems(this.medium);

    // Get the route and trigger getMediaItems based on the route
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let medium = paramMap.get("medium");
        if (medium?.toLowerCase() === "all") {
          medium = "";
        }
        this.getMediaItems(medium !== null ? medium : "");
      });
  }

  onMediaItemDelete(mediaItem: any) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium); // Reload the list after a delete
      });
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
        })

  }

}
