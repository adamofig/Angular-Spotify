import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule } from "@angular/router";
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [MainComponent, MenuComponent, ArtistDetailComponent, SearchArtistComponent],
  exports: [MainComponent]
})
export class FeatureModule { }
