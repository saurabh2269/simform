const Bcrypt = require('bcrypt');
const saltRounds = 10;


export class MyEncryption {
    static async encryptPassword(req, res, next){
        return new Promise<void>((resolve, reject) => {
            Bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                if(err){
                    reject();
                    next(err)
                }
                resolve(hash);
            })
        })
    }

    
}