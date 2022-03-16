# Basic dev environment

This basic starter template is setup to work with TailwindCSS, SASS and BrowserSync, as well as autoprefixer.

## Setup

1. Open `webpack.mix.js` and change the browserSync proxy to either your virtual host (i.e. *mydevsite.local*) or your localhost location (i.e. *localhost/mydevsite*).

2. Run `npm install` to download and install all dependencies (from package.json).

3. Run `npm run build` to make a first compile of TailwindCSS and SASS and to create the *dist/* folder.

4. Run `npm run watch` to (compile again and) start BrowserSync. A new browser window/tab will open with the local server running.

**Done!**