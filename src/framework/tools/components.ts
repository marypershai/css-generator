import { boxShadowComponent } from '../../app/components/css-components/box-shadow.component';
import { borderComponent } from '../../app/components/css-components/border.component';
import { filterComponent } from '../../app/components/css-components/filter.component';
import { borderRadiusComponent } from '../../app/components/css-components/border-radius.component';
import { textShadowComponent } from '../../app/components/css-components/text-shadow.component';
import { textComponent } from '../../app/components/css-components/text.component';
import { textColumnComponent } from '../../app/components/css-components/text-column.component';
import { backgroundGradientComponent } from '../../app/components/css-components/background-gradient.component';

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
  {
    name: 'text-shadow',
    component: textShadowComponent,
  },
  {
    name: 'text',
    component: textComponent,
  },
  {
    name: 'text-column',
    component: textColumnComponent,
  },
  {
    name: 'background-gradient',
    component: backgroundGradientComponent,
  },
];