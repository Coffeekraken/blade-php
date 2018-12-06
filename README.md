# Coffeekraken Blade PHP <img src="/.resources/coffeekraken-logo.jpg" height="25px" />

Blade PHP engine exposed to node using exec-php

## Table of content

1. [Install](#readme-install)
2. [Usage](#readme-usage)
3. [Contribute](#readme-contribute)
4. [License](#readme-license)
5. [Who are Coffeekraken](#readme-who-are-coffeekraken)

<a id="readme-install"></a>
## Install

```sh
npm install coffeekraken-blade-php --save
```

<a id="readme-usage"></a>
## Usage

```js
const bladePhp = require('coffeekraken-blade-php')
bladePhp.compile(__dirname, 'my-cool-view', {
    hello: 'world'
}).then((result) => {
    console.log(result)
})
```

<a id="readme-contribute"></a>
## Contribute

Blade-php is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)