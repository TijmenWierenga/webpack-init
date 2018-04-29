# Webpack init
So I have this really interesting idea for an app and can't wait to get started.
But then I have to spend two hours building a damn environment to even get started.
So here's my personal webpack configuration that currently supports:
* Webpack Dev Server with hot reloading
* SCSS loader for styles

Oh yeah, and it's also compatible with Docker since it polls the filesystem.

# Upcoming features
* Unit testing tools
* ES linting setup
* PostCSS support

(PR's welcome!)

# Commands
Start the Dev Server:
```bash
npm run start
```

Create a production build:
```bash
npm run build
```