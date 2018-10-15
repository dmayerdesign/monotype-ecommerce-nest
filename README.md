# Nest + Angular Universal Starter

A minimal [**Nest**](https://github.com/nestjs/nest) and Angular starter for Universal using the 
[Angular CLI](https://github.com/angular/angular-cli). If you're looking for the Angular Universal repo go to 
[angular/universal](https://github.com/angular/universal).

## Getting Started

This demo is built following the [Angular-CLI Wiki guide](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)

We're utilizing packages from the [Angular Universal @nguniversal](https://github.com/angular/universal) repo,
such as [ng-module-map-ngfactory-loader](https://github.com/angular/universal/modules/module-map-ngfactory-loader)
to enable Lazy Loading.

---

**Server-Side Rendering(ssr)**
* Happens at runtime
* Uses `ngExpressEngine` to render your application on the fly at the requested url.

---

### Installation
* `npm i`

### Development (Client-side only rendering)
* `npm start` which will run `ng serve`.

### Production (also for testing SSR/Pre-rendering locally)
*`npm run build:ssr && npm run serve:ssr`
  - Compiles your application and spins up a Nest server to serve
your Universal application on `http://localhost:4000`.

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
