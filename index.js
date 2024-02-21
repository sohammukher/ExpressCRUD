import express from 'express';
import routes from "./src/routes/crmRoutes"

// imports for the DB
import mongoose from 'mongoose';
import bodyParser from 'body-parser'



// Run Express
 const app = express();

// mongoose connection

// Promise to wait for response as opposed to turn an error until they get the answer.
mongoose.Promise = global.Promise;  // to support using native promises (i.e., global.Promise this is ), which provides better compatibility with modern JavaScript environments.

mongoose.connect('mongodb://localhost/NewConnection');





// Run our routes:
routes(app);


 // Define Port
const PORT = 9999;

 app.get('/', (req,res)=>{
 
    console.log("HIT API")
    return res.send("Browser is running on PORT: "+PORT)
 }
 );

 // Now we need to server to listen to the port on PORT : 1000
 app.listen(PORT,()=>{
    console.log("server is Up")
 })