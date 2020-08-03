# svelte app

![Release Manager](https://github.com/affandhia/cipan/workflows/Release%20Manager/badge.svg)

This is a project template for [Svelte](https://svelte.technology) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npm install -g degit # you only need to do this once

degit sveltejs/template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Deploying to the web

### Serve in your web

You can use https://www.jsdelivr.com/

![JS](https://cdn.jsdelivr.net/www.jsdelivr.com/a94a179199252a821cd6f5c2b02f91392c24afb6/img/logo-horizontal.svg)

Release [STABLE]: `https://cdn.jsdelivr.net/gh/affandhia/cipan@release/public/bundle.js`

Pre-release [UNSTABLE]: `https://cdn.jsdelivr.net/gh/affandhia/cipan@pre-release/public/bundle.js`

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
