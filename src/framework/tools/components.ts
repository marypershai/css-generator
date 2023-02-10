import { boxShadowComponent } from '../../app/components/css-components/box-shadow.component';
import { borderComponent } from '../../app/components/css-components/border.component';
import { filterComponent } from '../../app/components/css-components/filter.component';
import { borderRadiusComponent } from '../../app/components/css-components/border-radius.component';

export const allCssComponents  = [
  {
    name: 'box-shadow',
    component: boxShadowComponent,
  },
  {
    name: 'border',
    component: borderComponent,
  },
  {
    name: 'filter',
    component: filterComponent,
  },
  {
    name: 'border-radius',
    component: borderRadiusComponent,
  },
];