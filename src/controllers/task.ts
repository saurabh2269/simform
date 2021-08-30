const {  Task } = require('F:/NODE_JS_ASSIGNIMENT/models');

export class TaskControllers{
    static async getList(req, res, next){
        const categories = await Task.findAll({where:{user_id: req.user.user_id,cat_id: req.params.cat_id}});
        res.json(categories);
    }


    static async create(req, res, next){
        const category = await Task.create({task_name:req.body.task_name, description:req.body.description, user_id: req.user.user_id, cat_id:req.body.cat_id});
        res.json(category);
    }

    static async update(req, res, next){
        const task = await Task.update({task_name:req.body.task_name, description: req.body.description},
            {where:{id: req.params.task_id}});
            res.json('Success');
    }


    static async delete(req, res, next){
        await Task.destroy({where:{id: req.params.task_id}});
        res.json('Success');
    }
}