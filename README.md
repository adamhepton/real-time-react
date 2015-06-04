# Real-Time-React

A starter kit to get up and running with interactive real-time apps, pushing WebSockets communications (via Primus) through a Flux (ReactJS) application running on a node.js / Express server.

## What This Is

A skeleton set of files that you can use as a starting point to tweak in order to start making React JS/Flux applications that use real-time communication in as quick a time as possible, for whatever reason you want.

## What This Is Not

It is not intended that once you have taken a fork of it, you update directly from upstream.  This is not a decoupled example for you to select your toolsets, this is a quick and dirty starter kit: if you want different tools you go for it, you obviously know what you're doing.  Nor is this an example of a GOOD real-time application, either in terms of functionality or composition :D

## Getting Started
`npm install` to get all dependencies.

`gulp` has a default development task which will watch for changes in appropriate files and restart the server where needed, and rebuild through webpack again, when needed.

## Basic Overview

Server-side config is all in the main `app.js` file (which would need fleshing and separating as you see appropriate for your application).

Application code itself in `/react`, and follows Flux pattern of `actions` -> `stores` -> `views` -> `actions`, using Fluxxor as the dispatcher.  There are also directories for `utils` (which you could populate with API handlers, for example) and `constants` to share between stores and actions.  Entry point, as in, the first thing that is called by `public/index.html` and is pulled in by webpack, is in `/react/init.jsx`.

There is a basic design pattern set up within the skeleton which involves passing an `actionGroup`, `method` and, optionally, `params` to the primus.write and this will pass through the related primus.onData in the `isnit.jsx` file which, in turn, makes a naïve call to flux.actions of similarly-named scoping.

The application compiles down into a `public/js/bundle.js` file (and accompanying `.js.map`).  Tune `webpack.config.js` if you want to make changes to where and how these bundles are created.

There is a very simple, crude, sample app running on the root of the server, which can be accessed at your `localhost:3000` and shows its working in both server and client consoles.
