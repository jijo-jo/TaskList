const express = require('express')
const port = 4000

const app = express()

app.use(express.json);
app.use(require("./routes"))


app.listen(port,()=>{
    if(port){
        console.log("server is listening to port",port);
    }
    else{
        console.log("port is not available");
    }
})