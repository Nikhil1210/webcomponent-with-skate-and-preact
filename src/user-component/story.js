/* global module */

import { define } from 'skatejs';
import h from '../../stories/render';
import { storiesOf } from '@storybook/react';

import UserComponent from './component.js';
define(UserComponent);

storiesOf('UserComponent', module)
  .add('it renders', () => (
    <user-component></user-component>
  ))
  .add('it can render content into the slot', () => (
    <user-component>
      <p>This is some inner content</p>
    </user-component>
  ));
