import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { Up } from '../lib/Up';

export default {
  title: 'Up',
  component: Up,
  parameters: {
    backgrounds: [
      { name: 'blue', value: "#55b9f3", default: true },
    ]
  },
};

export const Text = () => <Up onClick={action('clicked')}/>;
