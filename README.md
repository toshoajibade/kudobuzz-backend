# Kudobuzz Review Backend

## Description
This is the backend to manage reviews of kudobuzz merchants.

## Prerequisites
Run ```npm install``` or ```yarn``` to install packages.
###Set your environmental variables
#### In development
Create a .env.local file and set your ```MONGODB_URI``` variable to the link to your mongoDB database
The cors package is used to manage access to the server, add the front end URL to the .env file, to whitelist it.
An example configuration is
```MONGODB_URI=mongodb://127.0.0.1/kodobuzzdb```
```URL=http://localhost:8080```
#### In production
Set your environment variables on your hosting dashboard, do you commit you environment variables to a public repo.


## Testing
Run ```npm run test or yarn test``` to test the test with mocha

## Running dev server
The server server is using nodemon for automatic syncing.
Run ```npm run dev or yarn dev``` to start development server

## To start server
The compiled code by babel is inside the dist folder, when hosting on services like Heroku, set this as the entry folder
Run ```npm run start or yarn start``` to start the server

## Author
* **Tosho Ajibade**
