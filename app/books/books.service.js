class BooksService {

    constructor(Restangular, BooksBaseService) {
        'ngInject';
        this.booksBaseUrl = BooksBaseService;
        this.books = Restangular.all('books');
        //observe the webpack's endpoint config
    }

    getBooksList() {
        return this.books.getList();
    }

    addBook(bookData) {
        return this.booksBaseUrl.all('books').customPOST(bookData).then(function (response) {
            return response;
        });
    }

    getBookData(id) {
        //books/id
        return this.booksBaseUrl.all('books').get(id).then(function (response) {
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
        //book/id to be proxied to "books/id"
        return this.booksBaseUrl.one(book.url).remove().then(function (response) {
            return response;
        });
    }

    cleanLibrary() {
        //Delete Library
        return this.booksBaseUrl.one('clean').remove().then(function (response) {
            return response;
        });
    }

}

export default BooksService