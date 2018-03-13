import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from "../../core/api-calls/api-request.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  private id: string = "0epOFNiUfyON9EYx7Tpr6V";
  constructor(private apiRequestService: ApiRequestService) { }
  public artist:any;

  ngOnInit() {
  }

  public async search(): Promise<void>{
    this.artist = await this.apiRequestService.searchArtist(this.id);
  }


}
