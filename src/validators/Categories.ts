    import { body, query, param } from "express-validator"
    const {  Categories } = require('F:/NODE_JS_ASSIGNIMENT/models');

    export class CategoriesValidators {


        static create(){
            return [body('category_name', 'Category name is required').isString()]; 
        }

        static update(){
            return [param('cat_id', 'Id is required').custom((cat_id, {req}) => {
                console.log("123",req.params);
                
                return Categories.findOne({where: {id: req.params.cat_id}}).then(category => {
                    if(category){
                        req.category = category;
                        return true;
                    } else {
                        throw new Error('Category  Not Exist');
                    }
                })
            })]; 
        }

        static delete(){
            return [param('id', 'Id is required').custom((id, {req}) => {
                return Categories.findOne({where: {id: req.param.id}}).then(category => {
                    if(category){
                        req.category = category;
                        return true;
                    } else {
                        throw new Error('Post Does Not Exist');
                    }
                })
            })]; 
        }
        
    }