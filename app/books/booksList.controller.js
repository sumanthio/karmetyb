class BooksListController {
  constructor($state, BooksService, toaster) {
    'ngInject';
    this.state = $state;
    this.booksService = BooksService;
    this.toaster = toaster;
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
    // this.booksService.getBooksList().then(function (response) {
    //   vm.list = response
    // }, function () {
    //   vm.toaster.pop('error', "Error", "Something went wrong");
    // });
  }

  cleanLibrary() {
    //delete call to bookService
  }

  addBookToLibrary() {
    //POST call to book service 
  }

}

export default BooksListController;