const express = require('express');
const app = express();
const items = require('./routes/restro');
const sequelize = require('./database');

app.use(express.json()); // <--- this parses incoming JSON bodies
app.use(express.urlencoded({ extended: false })); // <--- this handles form submissions
app.use('/restro',items )

sequelize.sync().then(result=>{
    app.listen(8080,()=>{console.log('Server is running 8080')});
})
