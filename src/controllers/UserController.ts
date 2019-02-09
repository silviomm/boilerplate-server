import { UserService } from "../services/UserService";

export class UserController {

    public userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public routes(app): void {

        app.route('/user')
            .get(this.userService.getAll)
            .post(this.userService.add);

        app.route('/user/:userId')
            .get(this.userService.getById)
            .put(this.userService.update)
            .delete(this.userService.delete)

    }
}

export default new UserController();