import { BoxShadowComponent } from '../../app/components/css-components/box-shadow/box-shadow.component';
import { AppComponent } from '../../app/app.component';
import { BorderComponent } from '../../app/components/css-components/border/border.component';

export type Components = BoxShadowComponent | BorderComponent | AppComponent;

export interface ComponentConfig {
  template: string;
  selector: string;
  childComponents: Components[];
}

export interface RoutesObj {
  path: string;
  component: Components;
}

export interface ModuleConfig {
  components: Components[];
  bootstrap: AppComponent;
  routes: RoutesObj[];
}