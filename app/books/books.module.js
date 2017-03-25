import BooksConfig from './books.config';
import BooksListController from './booksList.controller';
import BookController from './book.controller';

let booksModule = angular.module('booksApp.books', [])

booksModule.config(BooksConfig);
booksModule.controller('BooksListController', BooksListController);
booksModule.controller('BookController', BookController);

export default booksModule = booksModule.name;