import BooksConfig from './books.config';
import BooksController from './books.controller';
import BooksService from './books.service';

let booksModule = angular.module('booksApp.books', [])

booksModule.config(BooksConfig);

booksModule.service('BooksBaseService', (Restangular) => {
    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('https://interview-api-staging.bytemark.co');
    });
});

booksModule.service('BooksService', BooksService);
booksModule.controller('BooksController', BooksController);


export default booksModule = booksModule.name;