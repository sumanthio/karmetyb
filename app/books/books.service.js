class BooksService {

    constructor(Restangular) {
        'ngInject';
        this.books = Restangular.all('books');
        //observe the webpack's endpoint config
    }

    getBooksList() {
        return this.books.getList().then(function (response) {
            return response;
        });
    }

    addBook(data) {
        //books/id POST change
        // {
        //     "author": "Robert C. Martin",
        //     "categories": “programming",
        //     "publisher": "Prentice Hall",
        //     "title": "Clean Code"
        // }
        return this.books.getList().then(function (response) {
            return response;
        });
    }

    getBookData(id) {
        //books/id
        return this.books.getList().then(function (response) {
            return response;
        });
    }

    updateBookData(id) {
        //books/id
        return this.books.getList().then(function (response) {
            return response;
        });
    }

    deleteBook(id) {
        //books/id
        return this.books.getList().then(function (response) {
            return response;
        });
    }

    deleteLibrary(id) {
        //books delete
        return this.books.getList().then(function (response) {
            return response;
        });
    }

}

export default BooksService