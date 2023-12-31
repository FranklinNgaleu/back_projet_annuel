const pool = require("../../config/database")

module.exports = {
    create: (data, callBack) => {
        pool.query(
            'insert into registration(firstname, lastname, gender, email, password, number, role) values(?,?,?,?,?,?,?)',
            [
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.role
            ],
            (error,results,fields) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null,results)
            }
        );
    },


    getUsers: callBack => {
        pool.query(
            'select id,firstname,lastname,gender,email,number from registration',
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results)
            }
        );
    },


    getUserByUserId: (id, callBack) => {
        pool.query(
            'select id,firstname,lastname,gender,email,number from registration where id = ?',[id],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },

    updateUSer: (data, callBack) => {
        pool.query(
            'update registration set firstname=?, lastname=?, gender=?, email=?, password=?, number=?, role=? where id = ?',
            [
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.role,
                data.id
            ],
            (error,results,fields) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },

    deleteUser: (data, callBack) => {
        pool.query(
            'delete from registration where id = ?',
            [data.id],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },

    getUserByUserEmail: (email,callBack) => {
        pool.query(
            'select * from registration where email = ?',
            [email],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    }
};