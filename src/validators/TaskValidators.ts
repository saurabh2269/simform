import { body, query, param } from "express-validator"
const {  Task } = require('F:/NODE_JS_ASSIGNIMENT/models');

export class TaskValidators {


    static create(){
        return [body('task_name', 'Task name is required').isString()]; 
    }

    static update(){
        return [
        param('task_id', 'task_id is required').custom((task_id, {req}) => {
            return Task.findOne({where: {id: req.params.task_id}}).then(task => {
                if(task){
                    req.task = task;
                    return true;
                } else {
                    throw new Error('Task Does Not Exist');
                }
            })
        })]; 
    }

    static delete(){
        return [param('task_id', 'task_id is required').custom((task_id, {req}) => {
            return Task.findOne({where: {id: req.params.task_id}}).then(task => {
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