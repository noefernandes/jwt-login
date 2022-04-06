const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const corsOptions = require('./config/cors');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const PORT = process.env.PORT || 3500;

// Usado antes da definição do cors
// Manda a informação na resposta que o backend permite cookies nas requisições
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));


//Para decodificar no formato form url encoded
app.use(express.urlencoded({ extended: true }));
//Para decodificar Json
app.use(express.json());
//Para cookies
app.use(cookieParser());

//Rotas
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

// Usa o verifyJWT para pedir token para as rotas abaixo
app.use(verifyJWT);
app.use('/employees', require('./routes/employees'));

//Verificar erro para cada requisição
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));