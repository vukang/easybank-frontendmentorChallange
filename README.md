# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [https://vukang.github.io/easybank-frontendmentorChallange/]

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- Using .scss mixins for easier mediaqueries
- .scss map-get map for mediaquery breakpoints
- css advanced background image manipulation

Coding the hero section was a bit tedious but you always learn something new in the process.

```scss
// 640px, 1150px, 1400px
$breakpoints-up: (
  'medium': '40em',
  'large': '71.875em',
  'xlarge': '87.5em',
);

@mixin breakpoint($size) {
  @media (min-width: map-get($breakpoints-up, $size)) {
    @content;
  }
}
```
