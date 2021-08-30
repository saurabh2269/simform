const { sequelize } = require('F:/NODE_JS_ASSIGNIMENT/models');
const {  User } = require('F:/NODE_JS_ASSIGNIMENT/models');
import { MyEncryption } from "../helper/encryption";
const Bcrypt = require('bcrypt');
import * as Jwt from 'jsonwebtoken';



const saltRounds = 10;  


export class UserControllers {
        static login(req,res, next){
            const {email, password} = req.query;
            Bcrypt.compare(password, req.user.password, (err, isValid)=> {
                if(err){
                    next(new Error(err.message));
                }  else if(!isValid){
                    next(new Error('Email Password not matched'));
                }
                else {
                    console.log();
                    
                    const userDetail = {
                        user_id: req.user.id,
                        email: req.user.email
                    }
                    
                    const token = Jwt.sign(userDetail, 'jwt_secret', {expiresIn: '120d'});
                    const data = {token: token, user: userDetail};
                    res.json(data);
                }
            });
            
        }

        static async create(req, res, next){
            try{
                const { name , email, password } = req.body;
                console.log(password);
                
                const hash = await MyEncryption.encryptPassword(req, res, next);
                const user = await User.create({name, email, password:hash});
                    return res.json(user);
                
            } catch(err){
               next(err);
                
            }
        }
}

export default new UserControllers();