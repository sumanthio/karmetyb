class BooksConfig {
    static initRoute($stateProvider, RestangularProvider) {

        'ngInject';
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: 'app/books/list.html',
                controller: 'BooksController as books'
            })
            .state('single', {
                url: '/book/:id',
                templateUrl: 'app/books/detail.html',
                controller: 'BooksController as books'
            })
    }

}

export default BooksConfig.initRoute;