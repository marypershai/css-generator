import { RoutesObj } from '../framework/tools/interfaces';
import { notFound } from './common/not-found.component';
import { homePageComponent } from './pages/home-page.component';
import { cssGeneratorPageComponent } from './pages/css-generator-page.component';
import { cardGeneratorPageComponent } from './pages/card-generator-page.component';
import { gamePageComponent } from './pages/game-page.component';
import { aboutPageComponent } from './pages/about-page.component';
import { hexRGBPageComponent } from './pages/hex-rgb-page.component';

export const appRoutes: RoutesObj[] = [
  { path: '', component: homePageComponent },
  { path: 'css-generator', component: cssGeneratorPageComponent },
  { path: 'card-generator', component: cardGeneratorPageComponent },
  { path: 'hex-rgb', component: hexRGBPageComponent },
  { path: 'game', component: gamePageComponent },
  { path: 'about', component: aboutPageComponent },
  { path: '**', component: notFound },
];
