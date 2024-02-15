import express from 'express';


// Run Express
 const app = express();
// Define Port
const PORT = 3000;

 app.get('/', (req,res)=>{
 
    console.log("HIT API")
    return res.send("Browser is running on PORT: "+PORT)
 }
 );

 // Now we need to server to listen to the port on PORT : 1000
 app.listen(PORT,()=>{
    console.log("server is Up")
 })