import { RoutesObj } from '../framework/tools/interfaces';
import { notFound } from './common/not-found.component';
import { homePageComponent } from './pages/home-page.component';
import { boxShadowComponent } from './components/box-shadow.component';

export const appRoutes: RoutesObj[] = [
  { path: '', component: homePageComponent },
  { path: '**', component: notFound },
  { path: 'box-shadow', component: boxShadowComponent },
];
