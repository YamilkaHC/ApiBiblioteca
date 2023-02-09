const pages = require("./pages.json")


const pagesSeed = (clientBD) => {

    const sql = 'INSERT INTO page (page_number, book_id, content, html_content) VALUES ($1, $2, $3, $4)';

    const promises = pages.pages.map(page => {
        const values = [page.page_number, page.book_id, page.content, page.html_content];
        return clientBD.query(sql, values);
    });

    Promise.all(promises)
        .then(() => console.log("page seed ran successfully ✅"))
        .catch(() => console.log("something was wrong with page seed ❌"))
}


module.exports = pagesSeed