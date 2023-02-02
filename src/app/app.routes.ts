import { RoutesObj } from '../framework/tools/interfaces';
import { notFound } from './common/not-found.component';
import { homePageComponent } from './pages/home-page.component';
import { boxShadowComponent } from './components/css-components/box-shadow.component';
import { cssGeneratorPageComponent } from './pages/css-generator-page.component';
import { cardGeneratorPageComponent } from './pages/card-generator-page.component';
import { gamePageComponent } from './pages/game-page.component';
import { aboutPageComponent } from './pages/about-page.component';

export const appRoutes: RoutesObj[] = [
  { path: '', component: homePageComponent },
  { path: 'css-generator', component: cssGeneratorPageComponent },
  { path: 'card-generator', component: cardGeneratorPageComponent },
  { path: 'game', component: gamePageComponent },
  { path: 'about', component: aboutPageComponent },
  { path: '**', component: notFound },
  { path: 'css-component-box-shadow', component: boxShadowComponent },
];
