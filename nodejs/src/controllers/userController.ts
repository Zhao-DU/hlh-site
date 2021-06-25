import express, { Router } from 'express';
import { Request, Response } from 'express';
import IControllerBase from './interfaces/IControllerBase.interface';

// model 
import { UserModel } from "../database/users/users.model";

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
        .get(async (req, res, next) => {
            try {
                const usersGet = await UserModel.find({});
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(usersGet);
            } catch(err: any){
                next(err);
            }
        })
        .post(async (req, res, next) => {
            try {
                const userPost = await UserModel.create(req.body);                
                console.log('User created', userPost);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(userPost);
            } catch(err: any){
                next(err);
            }
        })
        .put((req, res, next) => {
            res.statusCode = 403;
            res.end('Put operation not supported on /users');
        })
        .delete(async (req, res, next) => {
            try {
                const userDelete = await UserModel.remove({});                
                console.log('Delete all users', userDelete);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(userDelete);
            } catch(err: any){
                next(err);
            }
        });
        
        this.router.route('/:userId')
        .get(async (req, res, next) => {
            try {
                const userGet = await UserModel.findById(req.params.userId);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(userGet);
            } catch(err: any){
                next(err);
            }
        })
        .post((req, res, next) => {
            res.statusCode = 403;
            res.end('POST operation not supported on /dishes' + req.params.userId);
        })
        .put(async (req, res, next) => {
            try {
                const userPut = await UserModel.findByIdAndUpdate(
                    req.params.userId,
                    {$set: req.body},
                    {new: true}
                    );
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(userPut);
            } catch(err: any){
                next(err);
            }
        })
        .delete(async (req, res, next) => {
            try {
                const userDelete = await UserModel.findByIdAndRemove(req.params.userId);                
                console.log('Delete single user', userDelete);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(userDelete);
            } catch(err: any){
                next(err);
            }
        });

    }

}

export default UserController