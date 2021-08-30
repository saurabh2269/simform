const {  Categories } = require('F:/NODE_JS_ASSIGNIMENT/models');

export class CategoriesControllers{
    static async create(req, res, next){
        console.log(req.user);
        const category = await Categories.create({category_name:req.body.category_name, user_id: req.user.user_id});
        res.json(category);
    }



    static async getList(req, res, next){
        const categories = await Categories.findAll({where:{user_id: req.user.user_id}});
        res.json(categories);
    }

}