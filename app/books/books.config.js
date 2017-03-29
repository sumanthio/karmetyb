class BooksConfig {
    static initRoute($stateProvider, RestangularProvider) {

        'ngInject';
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: 'app/books/list.html',
                controller: 'BookController as books'
            })
            .state('single', {
                url: '/book/:id',
                templateUrl: 'app/books/detail.html',
                controller: 'BookController as book'
            })
    }

}

export default BooksConfig.initRoute;