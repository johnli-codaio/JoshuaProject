# Joshua Project

## Setting up your environment
### MacOS
First, you should set up Node.js onto your computer. This can be done either with nvm or you can simply just install a node version.

We will be using Node v14.17.0, so you can install node via

```brew install nvm && nvm install v14.17.0 && nvm use v14.17.0```

If you do not have brew, you can install brew [here](https://brew.sh/)

---

Once node and nvm have been installed, install yarn, our package manager: `npm i -g yarn`

After you do this, run `yarn` in the top directory and all packages from package.json should be installed.

To run the website, run `yarn start`. You can access the website at `localhost:8080`.

## Heroku
This prototype is deployed on heroku via webpack dev server. For deployment to Heroku, webpack serve needs a few more command line args (--port, --host, and --disable-host-check). There are some security issues with --disable-host-check (DNS rebinding attack?), but this is development, not production, so it's fine.

https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error

In order to rebuild latest changes onto heroku, be sure to push to the `heroku` branch.