const pool = require('./db');

const resolvers = {
    Query: {
        users: (_, args) => {
            return new Promise((resolve, reject) => {
                pool.query('SELECT * FROM users', (err, results) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results.rows)
                    }
                })
            })
        },
        user: (_, args) => {
            return new Promise((resolve, reject) => {
                pool.query('SELECT * FROM users WHERE id = $1 AND name = $2', [args.id, args.name],
                (err, results) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results.rows[0])
                    }
                })
            })
        }
    },
    User: {
        books: (parent, args) => {
            return new Promise((resolve, reject) => {
                pool.query(`SELECT * FROM book WHERE author_id = $1 AND name != $2`, [parent.id, args.name],
                    (err, results) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(results.rows)
                        }
                    }
                )
            })
        }
    }
};

module.exports = resolvers;