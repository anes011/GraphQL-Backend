const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'ep-plain-fire-a2fjkizw-pooler.eu-central-1.aws.neon.tech',
    database: 'verceldb',
    user: 'default',
    port: '5432',
    password: 'unI2Ax5lDLZv',
    ssl: {
        require: true
    }
});

module.exports = pool;