import { Router } from "express";
import { CategoriesValidators } from "../validators/Categories";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { CategoriesControllers } from "../controllers/categories";
import { TaskControllers } from "../controllers/task";



class CatregoryRoutes {
    public router:Router;

    constructor(){
        this.router = Router();
        this.get();
        this.post();
        this.put();
        this.delete();
    }

    get(){
        this.router.get('/list/:cat_id',GlobalMiddleWare.authenticate, CategoriesControllers.getList);
    }

    post(){
        this.router.post('/create',GlobalMiddleWare.authenticate, CategoriesValidators.create(), GlobalMiddleWare.checkError, CategoriesControllers.create);
    }

    put(){
        this.router.put('/update/:cat_id',GlobalMiddleWare.authenticate, CategoriesValidators.update(), GlobalMiddleWare.checkError, CategoriesControllers.update);
    }

    delete(){
        this.router.delete('/delete/:cat_id',GlobalMiddleWare.authenticate, CategoriesValidators.delete(), GlobalMiddleWare.checkError, CategoriesControllers.delete);
    }

    
}

export default new CatregoryRoutes().router;