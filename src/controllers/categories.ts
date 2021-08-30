const {  Categories, Task } = require('F:/NODE_JS_ASSIGNIMENT/models');

export class CategoriesControllers{
    static async create(req, res, next){
        const category = await Categories.create({category_name:req.body.category_name, user_id: req.user.user_id,about: req.body.about});
        res.json(category);
    }



    static async getList(req, res, next){
        const categories = await Categories.findAll({where:{user_id: req.user.user_id}});
        res.json(categories);
    }

    static async update(req, res, next){
        const category = await Categories.update({category_name:req.body.category_name, about: req.body.about},
            {where:{id: req.params.cat_id}});
        res.json(category);
    }


    static async delete(req, res, next){
        await Categories.destroy({where:{id: req.params.cat_id}}).then(async () => {
            await Task.destroy({where:{cat_id: req.params.cat_id}});
        })
    }

}