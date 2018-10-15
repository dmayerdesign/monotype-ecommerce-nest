# Angular + Nest
A full-stack application scaffold written in TypeScript and using TypeScript-enabled enterprise patterns thanks to [Angular](https://github.com/angular/angular) and [Nest](https://github.com/nestjs/nest).
Began as a fork of the fantastic [universal-nest](https://github.com/kamilmysliwiec/universal-nest).

## Installation
`npm i`

## Development (Client-side only rendering)
`npm run dev` - Runs `ng serve` (for the UI) and `webpack` (for the server) concurrently.
To run them separately, run `npm run watch:ui` and `npm run watch:server`.

## Production (also for testing SSR/Pre-rendering locally)
`npm run build:production`

## Notes
In development (`npm run dev` or `npm run develop`), the Angular browser app is served via the cli (`ng serve`) on port 4200, and requests to `/api/*` are proxied to port 4000, on which the server is listening.
In production, the Nest server serves the app, to avoid having to deal with cross-origin resource sharing.

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
