class BooksListController {
  constructor($state, BooksService, toaster, $uibModal, $stateParams) {
    'ngInject';
    this.state = $state;
    this.booksService = BooksService;
    this.toaster = toaster;
    this.uibModal = $uibModal;
    this.stateParams = $stateParams;
    this.list = [];
    this.data = {};
  };

  getBooksList() {
    let vm = this;
    this.booksService.getBooksList().then(
      function (response) {
      vm.list = response;
    }, function () {
      vm.toaster.pop('error', "Error", "Something went wrong");
    });
  }

  getBookData() {
    let vm = this;
    this.booksService.getBookData(this.stateParams.id).then(function (response) {
      vm.data = response;
    }, function () {
      vm.toaster.pop('error', "Error", "Something went wrong");
    });
  }

  addBook() {
    let vm = this
    let modalInstance = this.uibModal.open({
      animation: true,
      size: 'md',
      templateUrl: 'app/books/add-book.html',
      controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
        //Initialize in ES6 way  :?
        $scope.book = {
          title: '', publisher: '', categories: '', author: ''
        };
        $scope.addBNewBook = function (book) {
          $uibModalInstance.close(book);
        };
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };

      }]
    });

    modalInstance.result.then(function (newBook) {
      //Make the put call. and in the success
      vm.booksService.addBook(newBook).then(function (response) {
        vm.state.reload();
        vm.toaster.pop('success', "Success", "Book Added");
      }, function () {
        vm.toaster.pop('error', "Error", "Something went wrong");
      })
    }, function (modalError) {
    });

  }

  editBookData(book) {
    //open up modal and PUT call to BookService
    let vm = this
    let modalInstance = this.uibModal.open({
      animation: true,
      size: 'lg',
      templateUrl: 'app/books/edit-book.html',
      controller: ['$scope', 'bookData', '$uibModalInstance', function ($scope, bookData, $uibModalInstance) {
        $scope.book = bookData;
        $scope.update = function (book) {
          $uibModalInstance.close(book);
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };

      }],
      resolve: {
        bookData: function () {
          return book;
        }
      }
    });

    modalInstance.result.then(function (updatedBook) {
      //Make the put call. and in the success
      vm.booksService.updateBookData(updatedBook.url, _.omit(updatedBook, ['url', 'lastCheckedOut', 'lastCheckedOutBy'])).then(function (response) {
        vm.state.reload();
        vm.toaster.pop('success', "Success", "${response.title} updated");
      }, function () {
        vm.toaster.pop('error', "Error", "Something went wrong");
      })
    }, function (modalError) {
    });

  }

  deleteBook(book) {
    //open up delete book confirmation
    //DELETE call and redirect to list view
    let vm = this
    let deleteModalInstance = this.uibModal.open({
      animation: true,
      templateUrl: 'app/books/delete-confirmation.html',
      controller: ['$scope', 'bookData', '$uibModalInstance', function ($scope, bookData, $uibModalInstance) {
        $scope.book = bookData;
        $scope.deleteBook = function (book) {
          $uibModalInstance.close(book);
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };

      }],
      resolve: {
        bookData: function () {
          return book;
        }
      }
    });

    deleteModalInstance.result.then(function (selectedItem) {
      //Delete call
      vm.booksService.deleteBook(selectedItem).then(function () {
        vm.toaster.pop('info', "Alert", "Book removed from library");
        vm.state.go('books', {}, { reload: true });
      }, function () {
        vm.toaster.pop('error', "Error", "Something went wrong");
      })

    }, function (modalError) {
    });
  }

  deleteLibrary() {
    //delete call to bookService
    let vm = this
    let modalInstance = this.uibModal.open({
      animation: true,
      size: 'sm',
      templateUrl: 'app/books/confirm-delete-library.html',
      controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

        $scope.cleanLibrary = function () {
          $uibModalInstance.close();
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };

      }]
    });

    modalInstance.result.then(function () {
      //Make the delete call. and in the success
      vm.booksService.cleanLibrary().then(function (response) {
        vm.state.reload();
        vm.toaster.pop('info', "Alert", "Library deleted");
      }, function () {
        vm.toaster.pop('error', "Error", "Something went wrong");
      })
    }, function (modalError) {
    });
  };

}

export default BooksListController;