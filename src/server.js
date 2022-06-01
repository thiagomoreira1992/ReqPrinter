//Libs import
require('express-async-errors');
const { response } = require('express');
const express = require('express');
const AppError = require('./utils/AppError');
//Routes import
const routes = require('./routes');


const app = express();

app.use(routes);

const PORT = 3333;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.use((error, request, reponse, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(PORT,  () => {
    console.log(`Server is running on port ${PORT}`);
})