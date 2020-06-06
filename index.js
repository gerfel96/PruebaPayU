const express=require ('express');
const app=express();
const cors=require('cors');
const path = require('path');
require('dotenv').config();


app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src', 'js')));
app.use(express.static(path.join(__dirname, 'src', 'css')));
app.use('/api',require('./routes/routes'));

app.listen(app.get('port'), ()=>{
    console.log('Runnning app on port ', app.get('port'));
}); 