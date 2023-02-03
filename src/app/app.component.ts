import { DMComponent } from '../framework/index';
import { ComponentConfig } from '../framework/tools/interfaces';
import { appHeader } from './common/app.header';
import { appFooter } from './common/app.footer';

export class AppComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
        <app-header></app-header>
        <main>
            <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
    `,
  childComponents: [appHeader, appFooter],
});
