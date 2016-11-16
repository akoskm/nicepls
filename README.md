nicepls uses [alexjs](https://github.com/wooorm/alex) to
detect insensitive words, explain
the error and suggest possible alternatives.

Installation
---
```
npm install
npm run build
jekyll serve -w
```

Open `http://localhost:4000/` in your browser.

Development
---
```
npm run build
jekyll serve -w // restart jekyll
```
*This is currently cumbersome since you have to rebuild the bundle after every change,
but I'm already working on a refined process which will support hot reloading of React component*

Demo
---
[http://akoskm.com/nicepls-react/](http://akoskm.com/nicepls-react/)

Motivation
---
This app is meant for those who would love to use alexjs features but does not have access
to node or any editor that currently has alexjs integration and found the online demo not suitable for long-term use.
The interface mimics the original [alexjs demo](http://alexjs.com/#demo).