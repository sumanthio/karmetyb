class BookController {
    constructor($state, $uibModal, toaster) {
        'ngInject';
        this.state = $state;
        this.uibModal = $uibModal;
        this.toaster = toaster;
        this.data = {
            "id": 1,
            "author": "Robert C. Martin",
            "categories": "programming",
            "publisher": "Prentice Hall",
            "title": "Clean Code"
        };
    };

    getBookData() {
        //open up modal and PUT call to BookService
    }


    editBookData(book) {
        //open up modal and PUT call to BookService
        let vm = this
        let modalInstance = this.uibModal.open({
            animation: true,
            size:'lg',
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

        modalInstance.result.then(function (selectedItem) {
            //Make the put call. and in the success
            this.booksService.updateBookData
            vm.state.reload();
            vm.toaster.pop('success', "Success", "Book Data updated");
        }, function () {
        });

    }

    removeBook(book) {
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
            vm.toaster.pop('info', "Alert", "Book removed from library");
            vm.state.go('books',{},{ reload: true });
        }, function () {
        });
    }
}

export default BookController;