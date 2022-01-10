# Ratings-Reviews-API

![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)

## Overview
- Create an API that serves product information to a retail portal. The API will serve up millions of rows of data in regards to product review, ratings, metadata information.

## Mission
- The ultimate goal for this service was to have the deployed application handle up to a 1000 client requests per second while keeping an error rate under 1% and query speeds under 2000ms

## Accomplishment
- Utilized pgAdmin4 to extract, transfer and load CSV files containing millions of rows into local database
- Reduced query speeds on local machine to under 5ms for each endpoint using indexing and querying data in postgres with aggregate functions
- Used K6 in conjunction with New Relic to monitor system performance and deduce bottelnecks
- Tested for the first 10%, middle and last 10% of rows when testing with K6 to account for any edge cases or slowdowns
- API was deployed onto 3 AWS EC2 Instance (T2.micro) to horizontally scale application
- Postgres Database was also deployed onto AWS EC2 Instance using pgDump to seed our database 
- NGINX proxy server was deployed to route client traffic across multiple instances 
- Loader.IO was implemented to stress test deployed application
- Utilized caching within load balancer to reduce query times on endpoints to under 20ms on deployed service
- Reduced intial query speeds of 6,000ms and error rate of 32% to under 600ms and 1% error rate on deployed service

## Deployment
- Deployed service on AWS EC2 container using the Ubuntu 20.04 server T2.micro
- Installed node, npm and all node modules relevant to run a build of our project
- Updated in bound rules to reroute all traffic from Port 80 to Port 3010 as our server hosts our client on Port 3010
- Updated in bound rules to open traffic to Port 5432 for Postgres DB
- Updated retail portal to send requests to our load balancer NGINX to distribute traffic to multiple instances

## Planning
-  Initialize and create a node express server
-  Connect PostgreSQL database with server
-  Create folders for models, routes, middleware, controllers
-  Main server file will use route for different apis (e.g app.use('/api/products', ProductRoute))
  - Routes folder contains the specific route endpoints that run a controller function when endpoint is requested
    - Model folder contains the schemas for the entities

## Potential Optimizations
- Use Docker to deploy our application onto any machine
- User Docker to create a container using a Postgres image and use Docker volumes to persist our database
- Create an instance of the Docker container running Postgres image with seeded database

## Installation 

```html
  Run all commands in root directory

  // install modules
  npm install

  // Start Server
  npm run start
  
  // Start Development Server
  npm run dev
```
