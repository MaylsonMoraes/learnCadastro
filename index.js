const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require ('./src/server/databases');

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/studentRegistration', require('./src/routes/studentRegistration'));
app.use('/martialProgramRegister', require('./src/routes/martialProgramRegister'));
app.use('/martialGraduation', require('./src/routes/martialGraduation'));


app.listen(3000, () => {
    console.log('Meu servidor está funcionando');
});