const express = require('express');
const {ServerConfig:{PORT},Logger} = require('./config');
const apiRoutes =require('./routes');

const app = express();

app.use('/api',apiRoutes);


app.listen(PORT,()=>{
    console.log(`Successfully started the server on PORT ${PORT} `);
    console.log("now started the implementing folder structure and ORM structure moving forward");
    Logger.info("Successfully started server"," root ", {});
});