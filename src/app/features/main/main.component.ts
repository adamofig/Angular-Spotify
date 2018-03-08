import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from "../../core/api-calls/api-request.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public searchModel: string;
  public searchingResponse: any;

  constructor(private apiRequestService: ApiRequestService) { }

  public ngOnInit(): void {
    this.apiRequestService.loginSpotify();
  }

  public async buscarArtista(): Promise<void> {
    console.log(`Searching for ${this.searchModel}...`);
    this.searchingResponse = await this.apiRequestService.searchInSpotify(this.searchModel);
  }

}
