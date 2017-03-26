class BooksConfig {
    static initRoute($stateProvider) {
        'ngInject';
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: 'app/books/list.html',
                controller: 'BooksListController as books'
            })
            .state('single', {
                url: '/books/:id',
                templateUrl: 'app/books/detail.html',
                controller: 'BookController as book'
            })

    }

}

export default BooksConfig.initRoute;