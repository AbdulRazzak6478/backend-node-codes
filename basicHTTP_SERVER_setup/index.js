const express = require('express')
const app = express() // create a express server object
const port = 3000

const my_logger = (req,res,next)=>{
  console.log("logging from middleware 1");
  next();//calls the next middleware
}
const exit_logger = (req,res,next)=>{
  console.log("logging from middleware 2");
  next();//calls the next middleware
}

app.get('/home',my_logger, exit_logger, (req, res) => {
//   res.send('hi there ! welcome to get');
console.log("last middleware");
res.json({
    message:'request received'
  })
})
app.post('/home', (req, res) => {
//   res.send('hi there ! welcome to post');
  res.json({
    message:'ok'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})