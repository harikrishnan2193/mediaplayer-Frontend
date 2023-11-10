//import json-server library in index.js using the keyword require
const jsonServer= require('json-server') 

//create server using json library
const mediaPlayerServer = jsonServer.create()

//create a path to db.json
const router = jsonServer.router('db.json')

//middleware to convert js to json
const middleware =jsonServer.defaults()

//connect to json and index.js
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


//setup port for server
const port = 5000 || process.env.PORT

//monitor 4000
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for the riquest`);
})