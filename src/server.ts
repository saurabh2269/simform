import bodyParser = require('body-parser');
import * as express from 'express';
import category from './routes/category';
import task from './routes/task';
import user from './routes/user';

const { sequelize } = require(__dirname + '/../models/index')



export class Server {
    public app: express.Application = express();
    constructor(){
        this.setConfiguration();
        this.configureBodyParser();
        this.setRoutes();
        this.error404Handler();
    }


    setConfiguration(){
       sequelize.authenticate();
    }

    setRoutes(){
        this.app.use('/api/user', user);
        this.app.use('/api/categories', category);
        this.app.use('/api/task', task);
    }

    configureBodyParser(){
        this.app.use(express.json());
    }


    error404Handler(){
        this.app.use((req,res)=>{
            res.status(404).json({
                message: 'Not Found',
                status_code: 404
            })
        })
    }


    handleError(){
        this.app.use((error, req, res, next) => {
            const errorStatus = req.statusCode || 500;
            res.status(errorStatus).json({
                message: error.message || 'Something went wromg',
                status_code : errorStatus

            })
        })
    }
}