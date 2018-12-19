# ABOUT

Just a front-end repository so I can get going with Front-End development more quickly.

> - DE18-18 - Made Production builds use React and ReactDOM use CDN links instead of serving it in the bundle.
> - DE18-18 - Added Webpack Merge for difference webpack.config.js files ('development' and 'production')
> - DE18-18 - Added React-axe
> - DE18-18 - Added back .babelrc, added babel-jest babel-core@bridge for jest testing
> - DE17-18 - Added React Hot Loading, Dynamic Import for ReactSuspense
> - DE17-18 - Enabled React.StrictMode
> - DE17-18 - Added Webpack Bundle Analyzer
> - DE17-18 - Added Sourcemaps
> - DE10-18 - Updated Webpack 3 to Webpack 4
> - OC21-18 - Adding favicon.ico
> - OC21-18 - Adding file-loader, copy-webpack-plugin
> - OC21-18 - Removing yarn.lock

# INSTALL

> npm install

Alternatively, if you have yarn installed,

> yarn install

# RUNNING LOCALLY

To Run,

> npm run dev

or

> yarn dev

# DOCKER

To make it go on Docker,

> docker built -t febp .
> docker run -p 8080:80 --name=febp febp
