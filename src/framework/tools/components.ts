import { boxShadowComponent } from '../../app/components/css-components/box-shadow.component';
import { borderComponent } from '../../app/components/css-components/border.component';
import { filterComponent } from '../../app/components/css-components/filter.component';
import { borderRadiusComponent } from '../../app/components/css-components/border-radius.component';
import { textShadowComponent } from '../../app/components/css-components/text-shadow.component';
import { textComponent } from '../../app/components/css-components/text.component';
import { textColumnComponent } from '../../app/components/css-components/text-column.component';
import { backgroundGradientComponent } from '../../app/components/css-components/background-gradient.component';
import { flexboxItemsComponent } from '../../app//components/css-components/flexbox-items.component';
import { backgroundColorComponent } from '../../app/components/css-components/background-color.component';
import { backgroundImageComponent } from '../../app/components/css-components/background-image.component';

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
  {
    name: 'flexbox-items',
    component: flexboxItemsComponent,
  },
  {
    name: 'background-color',
    component: backgroundColorComponent,
  },
  {
    name: 'background-image',
    component: backgroundImageComponent,
  },
];