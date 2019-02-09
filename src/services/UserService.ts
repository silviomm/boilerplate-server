import { Request, Response } from 'express';
import { UserDao } from '../db/UserDao';

export class UserService {

    // public userDao: UserDao;

    constructor() {
        // TODO
        // this.userDao = new UserDao();
    }

    public add(req: Request, res: Response) {
        new UserDao().add(req.body).then(user => res.json(user));
    }

    public getAll(req: Request, res: Response) {
        res.json(new UserDao().getAll());
    }

    public getById(req: Request, res: Response) {
        res.json(new UserDao().getById(req.body));
    }

    public update(req: Request, res: Response) {
        res.json(new UserDao().update(req.body));
    }

    public delete(req: Request, res: Response) {
        res.json(new UserDao().delete(req.body));
    }

}