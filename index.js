const express = require('express');//Web framework
const app = express();//Create server

app.set('views', './views');
app.set('view engine', 'pug')

app.use(express.static('public'))//Where to serve static content


//verify Date

app.use(verifDate = (req, res, next) => {
    const date = new Date();
    const day = date.toDateString().substring(0,3);
    const hour = date.toTimeString().substring(0,2);
    // console.log(hour)
    let t = false;
    switch (day) {
        case 'Mon':
        case 'Tue':
        case 'Wed':
        case 'Thu':
        case 'Fri': t = true
    }
    if (t === true && hour <= 17 && hour >= 9){
        console.log('we are on working time welcome!')
        next();
    }else res.send("we are off working time, available from monday to friday from 9 a.m to 5 p.m.")
    });                         

app.get('/', (req,res) => {
    res.render('home')
});
app.get('/services', (req,res) => {
    res.render('services')
});
app.get('/contact', (req,res) => {
    res.render('contact')
});

const PORT = process.env.PORT || 5000;//Start server
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));