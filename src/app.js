const express = require('express'); 
const routes = require('./routes/index');
const app = express();
const path = require('path')

app.use(express.json());
app.use(routes)
//config do hbs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(3000,function(){
    console.log('listening in port 3000');
})
