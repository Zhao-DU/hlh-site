import express, { Router } from 'express';
import { Request, Response } from 'express';
import IControllerBase from './interfaces/IControllerBase.interface';


class UserController {
    public path: string = '/users';
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
            res.end('GET REQUEST on users');
        })
    }

}

export default UserController