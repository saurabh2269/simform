const {  Task } = require('F:/NODE_JS_ASSIGNIMENT/models');

export class TaskControllers{
    static async getList(req, res, next){
        const categories = await Task.findAll({where:{user_id: req.user.id,cat_id: req.params.cat_id}});
        res.json(categories);
    }



    static async create(req, res, next){
        const category = await Task.create({category_name:req.body.category_name, user_id: req.user.id});
        res.json(category);
    }
}