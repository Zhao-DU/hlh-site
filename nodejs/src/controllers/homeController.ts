import express, { Router } from 'express';
import { Request, Response } from 'express';
import IControllerBase from './interfaces/IControllerBase.interface';

class HomeController {
    public path: string = '/';
    public router = express.Router();


    public constructor() {
        this.initRoutes()
    }

    private initRoutes() {
        this.router.use(express.json());

        // implement code for handling requests 
        this.router.route('/')
        .get((req, res, next) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end('GET REQUEST in HOME');
        })
    }

}

export default HomeController