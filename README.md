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
