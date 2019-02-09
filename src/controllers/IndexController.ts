export class IndexController {

    constructor() {}

    public routes(app): void {

        app.route('/')
            .get((req, res) => {
                res.json('oie')
            });
    }
}

export default new IndexController();