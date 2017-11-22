import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Recaptcha from '../src';
import { INVISIBLE_SITE_KEY, SITE_KEY } from './storybook-config.js';

storiesOf('Recaptcha', module)
  .add('default', () => <Recaptcha siteKey={SITE_KEY} onChange={action('default#onChange')}/>)
  .add('invisible', () => (
    <Recaptcha siteKey={INVISIBLE_SITE_KEY} onChange={action('invisible#onChange')} invisible />
  ))
  .add('invisible button', () => (
    <Recaptcha
      autoExecuteWhenInvisible={false}
      component="button"
      siteKey={INVISIBLE_SITE_KEY}
      onChange={action('invisible-button#onChange')}
      invisible
    >
      Click me! (autoExecuteWhenInvisible is false)
    </Recaptcha>
  ));
