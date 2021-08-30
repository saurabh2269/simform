import { Router } from "express";
import { TaskControllers } from "../controllers/task";
import { UserControllers } from "../controllers/user";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { UserValidators } from "../validators/UserValidators";

class TaskRoutes {
    public router:Router;

    constructor(){
        this.router = Router();
        this.get();
        this.post();
        this.put();
        this.delete();
    }

    get(){
        this.router.get('/list/:cat_id', GlobalMiddleWare.authenticate, TaskControllers.getList);
    }

    post(){
        this.router.post('/create',UserValidators.signup(), GlobalMiddleWare.checkError, UserControllers.create);
    }

    put(){
        // this.router.post('/update',UserValidators.signup(), GlobalMiddleWare.checkError, UserControllers.create);
    }

    delete(){
        // this.router.post('/destroy',UserValidators.signup(), GlobalMiddleWare.checkError, UserControllers.create);
    }

    
}

export default new TaskRoutes().router;