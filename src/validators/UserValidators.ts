import { body } from "express-validator"
import { query } from "express-validator"
const {  User } = require('F:/NODE_JS_ASSIGNIMENT/models');

export class UserValidators {


    static signup(){
        console.log('I ma in validator block');
        return [body('name', 'Username is required').isString(),
                body('password', 'Passwrd is required').isString(),
                body('email', 'Email is required').isString().custom((email, {req})=> {
                    return User.findOne({where: {email: req.body.email}}).then(user => {
                        if (user) {
                            throw new Error('User Already Exist');
                        } else {
                            return true;
                        }
                    })
                })]; 
    }
    static login(){
        return [query('email', 'Email is required').isEmail().custom((email, {req}) => {
            return User.findOne({where: {email: req.query.email}}).then(user => {   
                if (user) {
                    req.user = user;
                    return true;
                } else {
                    throw  new Error('User Does Not Exist');
                }
            })
        }),
        query('password', 'Passwrd is required').isString()];
    }
}