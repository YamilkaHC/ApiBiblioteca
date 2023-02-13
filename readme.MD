
# API BIBLIOTECA

This is a REST API which will allow our clients to consume the list of available books, as well as to read those books page by page in the desired formats.



## Getting started

* Clone the app
* Run ``npm install``
* Create a data base in postgress
* Add the .env vars
* Create the **public** schema
* Run ``npm run migrate``
* Run ``npm run seed``

## Command run app
``npm run dev``

## Routes availables

* ``/api/book`` o ``/api/book?limit=5&offset=0`` - get all books
* ``/api/book/1`` - get one book by id
* ``/api/book/1/page/1`` - get one page by book
* ``/api/book/1/page/1/html`` - get one page by book in a specific content type



