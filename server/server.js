console.log('server.js is working');
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('server/public'));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.listen(PORT, ()=>{
    console.log('app is running on port', PORT);
})
