import { Router } from "express";
import { UserControllers } from "../controllers/user";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { UserValidators } from "../validators/UserValidators";

class UserRoutes {
    public router:Router;

    constructor(){
        this.router = Router();
        this.get();
        this.post();
        this.put();
        this.delete();
    }

    get(){
        this.router.get('/login',UserValidators.login(), GlobalMiddleWare.checkError,  UserControllers.login);
    }

    post(){
        this.router.post('/signup',UserValidators.signup(), GlobalMiddleWare.checkError, UserControllers.create);
    }

    put(){
        //Update user
    }

    delete(){
        //delete user
    }

    
}

export default new UserRoutes().router;