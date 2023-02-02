import { DMModule } from '../framework/index';
import { appComponent } from './app.component';
import { ModuleConfig } from '../framework/tools/interfaces';
import { appRoutes } from './app.routes';
import { appHeader } from './common/app.header';
import { appFooter } from './common/app.footer';

class AppModule extends DMModule {
  constructor(config: ModuleConfig) {
    super(config);
  }
}

export const appModule = new AppModule({
  components: [
    appHeader,
    appFooter,
  ],
  bootstrap: appComponent,
  routes: appRoutes,
});
