import BooksConfig from './books.config';
import BooksListController from './booksList.controller';
import BookController from './book.controller';
import BooksService from './books.service';

let booksModule = angular.module('booksApp.books', [])

booksModule.config(BooksConfig);

booksModule.service('BooksBaseService', (Restangular) => {
    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('/api');
    });
});
booksModule.service('BooksService', BooksService);

booksModule.controller('BooksListController', BooksListController);
booksModule.controller('BookController', BookController);


export default booksModule = booksModule.name;