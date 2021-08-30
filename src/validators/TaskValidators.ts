import { body, query, param } from "express-validator"
const {  Task } = require('F:/NODE_JS_ASSIGNIMENT/models');

export class TaskValidators {


    static create(){
        return [body('task_name', 'Task name is required').isString()]; 
    }

    static update(){
        return [body('task_name', 'Task name is required').isString(),
        param('id', 'Id is required').custom((id, {req}) => {
            return Task.findOne({where: {id: req.query.id}}).then(task => {
                if(task){
                    req.task = task;
                    return true;
                } else {
                    throw new Error('Post Does Not Exist');
                }
            })
        })]; 
    }

    static delete(){
        return [param('id', 'Id is required').custom((id, {req}) => {
            return Task.findOne({where: {id: req.param.id}}).then(task => {
                if(task){
                    req.task = task;
                    return true;
                } else {
                    throw new Error('Post Does Not Exist');
                }
            })
        })]; 
    }
    
}