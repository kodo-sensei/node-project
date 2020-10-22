const db = require('../models');
const Book = db.books

module.exports = (app) => {
    app.post('/books', (req, res) => {
        const book = new Book({
            title: req.body.title,
            description: req.body.description,
            available: req.body.available,
        })

        book.save(book).then(data => {
            res.send({
                data: data,
                message: 'Successful',
                status: 200
            })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        })
    })

    app.get('/books', (req, res) => {
        Book.find({}).then(data => {
            res.send({
                data: data,
                message: 'Successful',
                status: 200
            })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        })
    })


}