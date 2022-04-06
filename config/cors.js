const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        //Se não tem origem (insomnia, postman) ou faz parte da whitelist
        if(!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        //Senão, não permite
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSucessStatus: 200
}

module.exports = corsOptions;