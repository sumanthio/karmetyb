class BookDirective {
    constructor($state, BooksService, toaster, $uibModal, $stateParams) {
        this.template = `<div class="card col-xs-6 col-sm-6 col-md-4 m-1">
        <img class="card-img-top" src="http://placehold.it/250x125" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">{{book.title}}</h4>
              <p class="card-text"> By <i>{{book.author}}</i></p>
            </div>
            <div class="card-footer text-xs-center">
              <a href="/#{{book.url}}"> <button class="btn btn-success btn-sm"><i class="fa fa-folder-open" aria-hidden="true"></i> View</button></a>
              <button class="btn btn-danger btn-sm" ng-click="clickDelete(book)"><i class="fa fa-times" aria-hidden="true"></i> Remove</button>
              <small class="text-right">2 mins ago</small>
            </div>
          </div>`;
        this.restrict = 'E';
        this.scope = {
            book: "=model",
            onRemoveClick: '&',
        };
    }
    link(scope, elem, attr) {
        scope.clickDelete = (book) => {
            scope.onRemoveClick(book);
        }
    }
}

class BookDirectiveController {
    constructor() {
        'ngInject'
    }
}

export default BookDirective;