import { body, query, param } from "express-validator"
const {  Categories } = require('F:/NODE_JS_ASSIGNIMENT/models');

export class CategoriesValidators {


    static create(){
        return [body('category_name', 'Category name is required').isString()]; 
    }

    static update(){
        return [body('category_name', 'Task name is required').isString(),
        param('id', 'Id is required').custom((id, {req}) => {
            return Categories.findOne({where: {id: req.query.id}}).then(category => {
                if(category){
                    req.category = category;
                    return true;
                } else {
                    throw new Error('Post Does Not Exist');
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