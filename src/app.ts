import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { UserController } from "./controllers/UserController";
import { IndexController } from "./controllers/IndexController";

class App {

    public app: express.Application;
    public mongoUrl: string = `mongodb://mongodb:27017/test`;
    public consign = require('consign');
    public userController: UserController = new UserController();
    public indexController: IndexController = new IndexController();


    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.expressSetup();
        this.routes();
        this.mongoSetup();
        // this.consignSetup();
    }

    private expressSetup(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }

    private routes(): void {
        this.userController.routes(this.app);
        this.indexController.routes(this.app);
    }

    // private consignSetup() {
    //     this.consign({ cwd: 'dist' })
    //         // .include('schemas')
    //         // .then('db')
    //         // .then('services')
    //         // .include('controllers')
    //         // .into(this.app);
    // }


    private mongoSetup(): void {
        require('mongoose').Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });

        const conn = mongoose.connection;
        conn.on('connected', () =>
            console.log('\n Mongoose! Connected! ' + this.mongoUrl));

        conn.on('disconnected', () =>
            console.log('\n Mongoose! Disconnected from ' + this.mongoUrl));

        conn.on('error', err =>
            console.log('\n Mongoose! Connection error: ' + err));

        process.on('SIGINT', () => conn.close(() => {
            console.log('\n Mongoose! Disconnected by application termination');
            process.exit(0);
        }));
    }

}

export default new App().app;
