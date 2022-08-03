const mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(config);
connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
});

var queries = {
    insert: "INSERT INTO people(name) VALUE ('John')",
    select: "SELECT * FROM people"
}

const insertData = () => {
    return new Promise(function(resolve, reject){
        connection.query(queries['insert'], function(err, result, fields){
            if(!err) resolve(console.log('Values inserted'));
            else reject(err);
        });
    });
}

const getData = () => {
    return new Promise(function(resolve, reject){
        connection.query(queries['select'], function(err, result, fields){
            if(!err) resolve(JSON.parse(JSON.stringify(result)));
            else reject(err);
        });
    });
}

module.exports = {
    getData,
    insertData
};