const db = require("../config/db");

exports.getAllProduct = (req, res) => {
    let response = {};
    db.query('SELECT * FROM products')
        .then(queryRes => {
            if (queryRes.rows.length > 0) {
                response = {
                    'status': 200,
                    'message': 'Ok!',
                    'data': queryRes.rows
                }
            }
            else {
                response = {
                    'status': 201,
                    'message': 'Data not found!',
                    'data': []
                }
            }
            res.send(response);
        })
};