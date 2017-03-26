class BooksConfig {
    static initRoute($stateProvider, RestangularProvider) {

        'ngInject';
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: 'app/books/list.html',
                controller: 'BooksListController as books'
            })
            .state('single', {
                url: '/book/:id',
                templateUrl: 'app/books/detail.html',
                controller: 'BookController as book'
            })

        RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin' : 'http://localhost:9100'});
    }

}

export default BooksConfig.initRoute;