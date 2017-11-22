import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loadApi from './loadApi';

const propTypes = {
  siteKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoExecuteWhenInvisible: PropTypes.bool,
  badge: PropTypes.oneOf([
    'bottomleft',
    'bottomright',
    'inline',
  ]),
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  invisible: PropTypes.bool,
  onError: PropTypes.func,
  onExpired: PropTypes.func,
  size: PropTypes.oneOf([
    'compact',
    'normal',
  ]),
  tabIndex: PropTypes.number,
  theme: PropTypes.oneOf([
    'dark',
    'light',
  ]),
  type: PropTypes.oneOf([
    'audio',
    'image',
  ]),
};

const defaultProps = {
  autoExecuteWhenInvisible: true,
  component: 'div',
  onError: undefined,
  onExpired: undefined,
  badge: 'inline',
  invisible: false,
  size: 'normal',
  tabIndex: 0,
  theme: 'light',
  type: 'image',
};

export default class Recaptcha extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    if (!global.recaptcha) {
      const { onError } = this.props;
      loadApi().then(() => this.forceUpdate(), onError);
    }
  }

  execute = () => {
    if (this.id != null) {
      global.grecaptcha.execute(this.id);
      return true;
    }

    return false;
  }

  setRef = ref => {
    if (!ref) {
      return;
    }

    const {
      autoExecuteWhenInvisible,
      badge,
      invisible,
      onChange,
      onExpired,
      siteKey,
      size,
      tabIndex,
      theme,
      type,
    } = this.props;

    this.id = global.grecaptcha.render(ref, {
      callback: onChange,
      'expired-callback': onExpired,
      sitekey: siteKey,
      size: invisible ? 'invisible' : size,
      tabindex: tabIndex,
      badge,
      theme,
      type,
    });

    if (invisible && autoExecuteWhenInvisible) {
      this.execute();
    }
  };

  render() {
    if (!global.recaptcha) {
      return null;
    }

    const {
      component: Tag,
      autoExecuteWhenInvisible,
      badge,
      children,
      invisible,
      onChange,
      onError,
      onExpired,
      siteKey,
      size,
      tabIndex,
      theme,
      type,
      ...props
    } = this.props;

    return (
      <div {...props}>
        <Tag ref={this.setRef}>
          {children}
        </Tag>
      </div>
    );
  }
}

Recaptcha.propTypes = propTypes;
Recaptcha.defaultProps = defaultProps;
