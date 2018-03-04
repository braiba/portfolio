import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {HomeComponent} from "./controllers/home/home.component";
import {NotFoundComponent} from "./controllers/not-found/not-found.component";
import {AppRoutingModule} from "./app-routing.modules";
import {CvComponent} from "./controllers/cv/cv.component";
import {ProjectsComponent} from "./controllers/projects/projects.component";
import {ArduinoGunComponent} from "./controllers/projects/arduino-gun/arduino-gun.component";
import {CodenamesTwitterBotComponent} from "./controllers/projects/codenames-twitter-bot/codenames-twitter-bot.component";
import {GeekStitchComponent} from "./controllers/projects/geek-stitch/geek-stitch.component";
import {LiveTextAdventuresComponent} from "./controllers/projects/live-text-adventures/live-text-adventures.component";
import {PebbleWatchFaceComponent} from "./controllers/projects/pebble-watch-face/pebble-watch-face.component";
import {PortfolioComponent} from "./controllers/projects/portfolio/portfolio.component";

@NgModule({
    declarations: [
        AppComponent,
        ArduinoGunComponent,
        CodenamesTwitterBotComponent,
        CvComponent,
        GeekStitchComponent,
        HomeComponent,
        LiveTextAdventuresComponent,
        NotFoundComponent,
        PebbleWatchFaceComponent,
        PortfolioComponent,
        ProjectsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
