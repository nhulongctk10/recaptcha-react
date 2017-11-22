# recaptcha-react <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

> A React component for rendering a reCAPTCHA captcha ✅

## Live Playground

To run the demo on your own computer:
* Clone this repository
* `$ npm install`
* Set your reCAPTCHA keys in `stories/storybook-config.js`
* `$ npm run storybook`
* Visit http://localhost:6006/

## Getting Started
### Install dependencies
Ensure packages are installed with correct version numbers by running:
```sh
(
  export PKG=recaptcha-react;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)
```

Which produces and runs a command like:

```sh
npm install --save recaptcha-react react@>=#.## react-dom@>=#.## ...
```

### Usage
`recaptcha-react` exports a single component — `Recaptcha`. Simply import it and
render wherever you need a captcha. See the props table below for how to configure
the captcha to your needs.

```js
import Recaptcha from 'recaptcha-react';

export default function MyCaptcha() {
  return (
    <Recaptcha siteKey="xxx" onChange={token => alert(token)} />
  );
}
```

### Props

| name                       | type                                            | isRequired | default value |
| -------------------------- | ----------------------------------------------- | ---------- | ------------- |
| `siteKey`                  | `string`                                        | `true`     |               |
| `onChange`                 | `function`                                      | `true`     |               |
| `autoExecuteWhenInvisible` | `function`                                      |            | `true`        |
| `badge`                    | `'bottomleft'` \| `'bottomright'` \| `'inline'` |            | `'inline'`    |
| `component`                | `string` \| `function`                          |            | `'div'`       |
| `invisible`                | `boolean`                                       |            | `false`       |
| `onError`                  | `function`                                      |            |               |
| `onExpired`                | `function`                                      |            |               |
| `size`                     | `'compact'` \| `'normal'`                       |            | `'normal'`    |
| `tabIndex`                 | `number`                                        |            | `0`           |
| `theme`                    | `'dark'` \| `'light'`                           |            | `'light'`     |
| `type`                     | `'audio'` \| `'image'`                          |            | `'image'`     |

[package-url]: https://npmjs.org/package/recaptcha-react
[npm-version-svg]: http://versionbadg.es/simonify/recaptcha-react.svg
[deps-svg]: https://david-dm.org/simonify/recaptcha-react.svg
[deps-url]: https://david-dm.org/simonify/recaptcha-react
[dev-deps-svg]: https://david-dm.org/simonify/recaptcha-react/dev-status.svg
[dev-deps-url]: https://david-dm.org/simonify/recaptcha-react#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/recaptcha-react.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/recaptcha-react.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/recaptcha-react.svg
[downloads-url]: http://npm-stat.com/charts.html?package=recaptcha-react
