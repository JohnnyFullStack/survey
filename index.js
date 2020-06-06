const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

app.get('/',(req,res)=>{
    res.send({hi:'there2'})
});



const PORT = process.env.PORT || 5000
app.listen(PORT);