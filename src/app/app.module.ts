import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureModule } from "./features/feature.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from './app.component';

import { RouterModule } from "@angular/router";

import { MenuComponent } from "../app/features/menu/menu.component";
import { MainComponent } from "../app/features/main/main.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    CoreModule,
    RouterModule.forRoot([
      { path: "mi-menu", component: MenuComponent },
      { path: "buscar-artista", component: MainComponent },
      { path: "**", component: MenuComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
