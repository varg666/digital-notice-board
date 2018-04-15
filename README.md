[![Build Status](https://travis-ci.org/devugees/digital-notice-board.svg?branch=develop)](https://travis-ci.org/devugees/digital-notice-board)

# Development

#### Start server backend server
`cd backend && npm run server`
#### Start server frontend server
`cd frontend && yarn start`
or
` cd frontend && npm start `

## Synopsis

This is the Digital Career Institute Dashboard. It has plenty of modules which loop automatically through and inform the audience about upcoming events, github activity or little code snippets.

## Code Example

Stack:
1. React
1. NodeJS
1. MongoDB

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Start frontend
`cd frontend && yarn start`

Start backend
`cd backend && npm run server`




## Deployment


`git clone https://github.com/devugees/digital-notice-board/`

`cd digital-notice-board`

Build on the live system. We want to run the frontend production build (not development server) and the normal backend node server.
1. cd frontend
1. npm i
1. `npm run build`
1. cd ../backend
1. npm i

### Setup environment
copy the `.env.example` to `.env` in both: frontend and backend.
and setup your credentials for the production environment. In my case it was:
**Frontend**
```
REACT_APP_DOMAIN="http://192.168.178.73"
REACT_APP_BACKENDPORT="4000"
```
**Backend**
```
DB_URI=mongodb://<username>:<password>@ds115749.mlab.com:15749/digitalnoticeboard   
```


### System service
[Tutorial](https://github.com/noreading/simple-node-server/blob/master/docs/install-a-system-service.md) to setup a system service.

For this project I've setup two services, one for the fronend, one for the backend.

They look in my case like that:
**Frontend**
```=unix
#/etc/systemd/system/node-boilerplate.digital-notice-board.service
[Unit]
Description=DigitalNoticeBoard FRONTEND
After=network.target
[Service]
User=root
Environment=NODE_ENV=production
WorkingDirectory=/var/www/digital-notice-board
ExecStart=/usr/bin/serve -s ./frontend/build
Restart=always
RestartSec=500ms
StartLimitInterval=0

[Install]
WantedBy=multi-user.target
```

**Hint:** On the raspberry we need to `serve` the frontend build with a special start task because we dont want a developement server in production.
We need the `serve` library installed globally:

```npm i -g serve```

Find out the absolute paths per
`whereis node` /usr/bin/node
`whereis serve`


**Backend**
```=unix
[Unit]
#/etc/systemd/system/node-boilerplate.digital-notice-board-backend.service
Description=DigitalNoticeBoard BACKEND
After=network.target
[Service]
User=root
Environment=NODE_ENV=production
WorkingDirectory=/var/www/digital-notice-board/backend
ExecStart=/usr/bin/node server/index.js
Restart=always
RestartSec=500ms
StartLimitInterval=0

[Install]
WantedBy=multi-user.target
```




## Tests
Test files are next to the components.

Eg: `Video.js` and `Video.test.js`

Run test suite locally

`npm run tests`

Everytime when you push you see the [TravisCI](https://travis-ci.org/devugees/digital-notice-board) build running all tests.
 This badge shows the build status for the development branch [![Build Status](https://travis-ci.org/devugees/digital-notice-board.svg?branch=develop)](https://travis-ci.org/devugees/digital-notice-board)
