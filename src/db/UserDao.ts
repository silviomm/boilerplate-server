import { IUser, UserDb } from '../schemas/UserSchema';

export class UserDao {

    public add(user: IUser): Promise<IUser> {
        const u = new UserDb(user);
        return u.save((err, _user) => {
            if (err) {
                return err;
            }
            return _user;
        });
    }

    public getAll() {
        UserDb.find({}, (err, users) => {
            if (err) {
                return err;
            }
            return users;
        });
    }

    public getById(user: IUser) {
        UserDb.findById(user.id, (err, example) => {
            if (err) {
                return err;
            }
            return example;
        });
    }

    public update(user: IUser) {
        UserDb.findOneAndUpdate({ _id: user.id }, user, { new: true }, (err, u) => {
            if (err) {
                return err;
            }
            return u;
        });
    }

    public delete(user: IUser) {
        UserDb.remove({ _id: user.id }, (err) => {
            if (err) {
                return err;
            }
            return true;
        });
    }

}