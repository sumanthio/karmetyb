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

  cleanLibrary() {
    //delete call to bookService
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
          title:'', publisher:'', categories:'', author:''
          
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
        vm.toaster.pop('success', "Success", "${response.title} added");
      })
    }, function (modalError) {
    });

  }

}

export default BooksListController;