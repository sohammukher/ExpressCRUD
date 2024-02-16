const routes = (app) =>{

    // http://localhost:3001/contact
    app.route("/contact")
    .get((req,res,next)=>{

    // MiddleWare
    console.log("Req "+req);
   

    next();
    }, (req, res, next) =>{
        res.send("Post Successful")

    }
    )

    

    .post((req,res)=>
    res.send("Post Successful")
    )

    // http://localhost:3001/contact/431
    app.route("/contact/:contactId")
    .put((req,res)=>
    res.send("PUT Successful")
    )

    .delete((req,res)=>
    res.send("DELETE Successful")
    )
    
}

export default routes;