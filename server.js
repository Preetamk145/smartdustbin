const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
  });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  