class BooksConfig {
    static initRoute($stateProvider) {
        'ngInject';
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: require('./books-list.html'),
                controller: 'BooksListController as books'
            })
            .state('book', {
                url: '/:id',
                parent: 'books',
                templateUrl: require('./book.html'),
                controller: 'BookController as book'
            })

    }

}

export default BooksConfig.initRoute;