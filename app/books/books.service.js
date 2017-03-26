class BooksService {

    constructor(Restangular, BooksBaseService) {
        'ngInject';
        this.booksBaseUrl = BooksBaseService;
        //observe the webpack's endpoint config
    }

    getBooksList() {
        return this.booksBaseUrl.all('books').getList();
    }

    addBook(data) {
        //books/id POST change
        // {
        //     "author": "Robert C. Martin",
        //     "categories": “programming",
        //     "publisher": "Prentice Hall",
        //     "title": "Clean Code"
        // }
        return this.booksBaseUrl.all('books').post(data).then(function (response) {
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