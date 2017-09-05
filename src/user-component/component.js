import { Component, define, h } from 'skatejs';

import style from '../util/style.js';
import css from './styles.scss';

export default class UserComponent extends Component {
  /**
   * @property {string} is defines the component as user-component
   */
  static get is() {
    return 'user-component';
  }

  renderCallback() {
    return (
      <div>
        { style(this, css) }
        <p class="text">
          Hello, world! I am user-component!
          <slot />
        </p>
      </div>
    );
  }
}

define(UserComponent);
