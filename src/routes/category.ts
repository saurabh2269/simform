import { Router } from "express";
import { CategoriesValidators } from "../validators/Categories";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { CategoriesControllers } from "../controllers/categories";



class CatregoryRoutes {
    public router:Router;

    constructor(){
        this.router = Router();
        this.get();
        this.post();
        this.put();
        this.delete();
        this.patch();
    }

    get(){
        this.router.get('/list',GlobalMiddleWare.authenticate, CategoriesControllers.getList);
    }

    post(){
        this.router.post('/create',GlobalMiddleWare.authenticate, CategoriesValidators.create(), GlobalMiddleWare.checkError, CategoriesControllers.create);
    }

    put(){

    }

    delete(){

    }

    patch(){

    }
}

export default new CatregoryRoutes().router;