const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kumparan'
})

function createDB() {
    db.connect(function (err) {
        if (err) throw err

        const sql = 'CREATE DATABASE kumparan'

        db.query(sql, function (err, result) {
            if (err) throw err
            console.log('Success Created DATABASE')
        })
    })
}

function createArticleTable() {
    db.connect(function (err) {
        if (err) throw err

        const sql = `CREATE TABLE article
        (
            id int NOT NULL AUTO_INCREMENT,
            author varchar(255),
            title varchar(255),
            body varchar(255),
            created TIMESTAMP,
            PRIMARY KEY (id)
        )`

        db.query(sql, function (err, result) {
            if (err) throw err
            console.log('Success Created table')
        })
    })
}

function insertData() {
    db.connect(function (err) {
        if (err) throw err

        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

        const sql = `INSERT INTO article (author, title, body, created) VALUES ?`

        const values = [['Rick Riordans', 'Percy Jackson', 'Percy Jackson is fantasy novel', currentDate]]

        db.query(sql, [values], function (err, result) {
            if (err) throw err
            console.log('Success Insert ' + result.affectedRows + ' Row Data' )
        })
    })
}

function getAllData() {
    db.connect(function (err) {
        if(err) throw err

        const sql = 'SELECT * FROM article'

        db.query(sql, function (err, result) {
            if (err) throw err
            console.log(result)
        })
    })
}

getAllData()
module.exports = {
    createDB
}