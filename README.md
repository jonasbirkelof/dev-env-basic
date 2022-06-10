# Basic dev environment

This basic starter template is set up to work with TailwindCSS, SASS and BrowserSync, as well as autoprefixer. Use this if you want a quick way to start a project using these tools!

Please refer to the documentations for detailed instructions if you want to setup things differently:

- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [BrowserSync](https://browsersync.io/docs)

## Clone or download

Clone this repo to your fresh project folder using: 
````
git clone https://github.com/jonasbirkelof/dev-env-basic.git
````
...and follow the setup instructions below, or just download the zip-file.

## Setup

1. Open *webpack.mix.js* and change the browserSync proxy to either your local virtual host (i.e. *mydevsite.local*) or your localhost location (i.e. *localhost/mydevsite*).

2. Run `npm install` to download and install all dependencies (from package.json).

3. Run `npm run build` to make an initial compile of TailwindCSS and SASS and to create the *dist/* folder.

4. Run `npm run watch` to (compile again and) start BrowserSync. A new browser window or tab will open with the local server running on port 3000, or higher if you have multiple instances of BrowserSync running.

Now you can start creating you application within the *src/* folder. Remember to update *tailwind.config.js* and *webpack.mix.js* if you are adding file types or directories outside of *src/*.
