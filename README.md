# Kudobuzz Review Backend

## Description
This is the backend to manage reviews of kudobuzz merchants. The frontend is hosted on netlify with the url ```https://kudobuzzreviews.netlify.com/```, the backend is hosted on heroku (Please note there may be a few seconds delay in fetching data from the backend when you first go the site, heroku free account server sleeps after 30minutes of inactivity so it needs to wakeup). The database is stored on mlab, it is seeded with 3000 randomly generated data that can be seen at ```sampleData.json``` from the root folder.

## Prerequisites
Run ```npm install``` or ```yarn``` to install packages.
###Set your environmental variables
#### In development
Create a .env file and set your ```MONGODB_URI``` variable to your mongoDB database url e.g.
```MONGODB_URI=mongodb://127.0.0.1/kodobuzzdb```
#### In production
Set your environment variables on your hosting dashboard, do not commit you environment variables to a public repo.


## Testing
Run ```npm run test or yarn test``` to test this application, mocha and chai the packages used for testing.

## Running dev server
The server server is using nodemon for automatic syncing.
Run ```npm run dev or yarn dev``` to start development server

## To start server
The compiled code by babel is inside the dist folder, when hosting on services like Heroku, set this as the entry folder
Run ```npm run start or yarn start``` to start the server

## Author
* **Tosho Ajibade**
