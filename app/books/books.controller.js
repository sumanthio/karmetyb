class BooksListController {
  constructor($state, BooksService, toaster, $uibModal) {
    'ngInject';
    this.state = $state;
    this.booksService = BooksService;
    this.toaster = toaster;
    this.uibModal = $uibModal;
    this.list = [
      {
        author: "Ash Maurya",
        categories: "process",
        lastCheckedOut: null,
        lastCheckedOutBy: null,
        publisher: "O'REILLY",
        title: "Running Lean",
        url: "/book/1"
      },
      {
        author: "Test",
        categories: "process",
        lastCheckedOut: null,
        lastCheckedOutBy: null,
        publisher: "O'REILLY",
        title: "Running Mad",
        url: "/book/2"
      }
    ];
  };

  getBooksList() {
    let vm = this;
    this.booksService.getBooksList().then(function (response) {
      vm.list = response
    }, function () {
      vm.toaster.pop('error', "Error", "Something went wrong");
    });
  }

  addBook() {
    //POST call to book service 
    let vm = this
    let modalInstance = this.uibModal.open({
      animation: true,
      size: 'md',
      templateUrl: 'app/books/add-book.html',
      controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
        //Initialize in ES6 way  :?
        $scope.book = {
          title: '', publisher: '', categories: '', author: ''

        }
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
        vm.toaster.pop('success', "Success", "Entire Library Deleted");
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
        vm.toaster.pop('success', "Success", "${response.title} added");
      })
    }, function (modalError) {
    });
  };

}

export default BooksListController;