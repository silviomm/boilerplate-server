export class IndexController {

    constructor() {}

    public routes(app): void {

        app.route('/')
            .get((req, res) => {
                res.json('Ok!')
            });
    }
}

export default new IndexController();