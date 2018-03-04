import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from "./controllers/not-found/not-found.component";
import {HomeComponent} from "./controllers/home/home.component";
import {ProjectsComponent} from "./controllers/projects/projects.component";
import {CvComponent} from "./controllers/cv/cv.component";
import {ArduinoGunComponent} from "./controllers/projects/arduino-gun/arduino-gun.component";
import {CodenamesTwitterBotComponent} from "./controllers/projects/codenames-twitter-bot/codenames-twitter-bot.component";
import {PortfolioComponent} from "./controllers/projects/portfolio/portfolio.component";
import {PebbleWatchFaceComponent} from "./controllers/projects/pebble-watch-face/pebble-watch-face.component";
import {LiveTextAdventuresComponent} from "./controllers/projects/live-text-adventures/live-text-adventures.component";
import {GeekStitchComponent} from "./controllers/projects/geek-stitch/geek-stitch.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: '',
                component: ArduinoGunComponent,
            },
            {
                path: 'arduino-gun',
                component: ArduinoGunComponent,
            },
            {
                path: 'codenames-twitter-bot',
                component: CodenamesTwitterBotComponent,
            },
            {
                path: 'geek-stitch',
                component: GeekStitchComponent,
            },
            {
                path: 'live-text-adventures',
                component: LiveTextAdventuresComponent,
            },
            {
                path: 'pebble-watch-face',
                component: PebbleWatchFaceComponent,
            },
            {
                path: 'portfolio',
                component: PortfolioComponent,
            },
        ],
    },
    {
        path: 'cv',
        component: CvComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {}
