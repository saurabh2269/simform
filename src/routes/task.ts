import { Router } from "express";
import { TaskControllers } from "../controllers/task";
import { UserControllers } from "../controllers/user";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { TaskValidators } from "../validators/TaskValidators";
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
        this.router.post('/create',GlobalMiddleWare.authenticate, TaskValidators.create ,GlobalMiddleWare.checkError, TaskControllers.create);
    }

    put(){
        this.router.put('/update/:cat_id',GlobalMiddleWare.authenticate, TaskValidators.update, GlobalMiddleWare.checkError, TaskControllers.update);
    }

    delete(){
        this.router.delete('/delete/:cat_id',GlobalMiddleWare.authenticate, TaskValidators.delete, GlobalMiddleWare.checkError, TaskControllers.delete);
    }

    
}

export default new TaskRoutes().router;