class BooksService {

    constructor(Restangular, BooksBaseService) {
        'ngInject';
        this.booksBaseUrl = BooksBaseService;
        //observe the webpack's endpoint config
    }

    getBooksList() {
        return this.booksBaseUrl.all('books').getList();
    }

    addBook(book) {
        return this.booksBaseUrl.all('books').customPOST(data).then(function (response) {
            return response;
        });
    }

    getBookData(id) {
        //books/id
        return this.books.getList().then(function (response) {
            return response;
        });
    }

    updateBookData(url, bookObject) {
        //book/id to be proxied to "books/id"
        return this.booksBaseUrl.one(url).customPUT(bookObject).then(function (response) {
            return response;
        });
    }

    deleteBook(book) {
        //books/id
        return this.booksBaseUrl.one(book.url).remove().then(function (response) {
            return response;
        });
    }

    deleteLibrary(id) {
        //books delete
        return this.booksBaseUrl.one('clean').remove().then(function (response) {
            return response;
        });
    }

}

export default BooksService