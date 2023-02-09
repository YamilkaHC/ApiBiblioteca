const books = require("./books.json")

const bookSeed = (clientBD) => {


    const sql = 'INSERT INTO book (title, author, date, name, total_pages, synopsis) VALUES ($1, $2, $3, $4, $5, $6)';

    const promises = books.books.map(book => {
        const values = [book.title, book.author, book.date, book.name, book.total_pages, book.synopsis];
        return clientBD.query(sql, values);
    });

    Promise.all(promises)
        .then(() => console.log("book seed ran successfully ✅"))
        .catch(() => console.log("something was wrong with book seed ❌"))

}



module.exports = bookSeed