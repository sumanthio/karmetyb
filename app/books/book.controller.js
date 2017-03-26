class BookController {
    constructor($state, $uibModal) {
        'ngInject';
        this.state = $state;
        this.uibModal = $uibModal;
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


    editBookData() {
        //open up modal and PUT call to BookService
        let vm = this
        let modalInstance = vm.uibModal.open({
            animation: true,
            templateUrl: require('./delete-confirmation.html'),
            controller: ['$scope', 'bookData', '$uibModalInstance', function ($scope, bookData, $uibModalInstance) {
                $scope.book = bookData;
                console.log(bookData);
                $scope.ok = function () {
                    $uibModalInstance.close($ctrl.selected.item);
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
            $ctrl.selected = selectedItem;
            //Toast a delete message
        }, function () {
        });
    }

    }

    removeBook(book) {
        //open up delete book confirmation
        //DELETE call and redirect to list view
        let vm = this
        let modalInstance = vm.uibModal.open({
            animation: true,
            templateUrl: require('./delete-confirmation.html'),
            controller: ['$scope', 'bookData', '$uibModalInstance', function ($scope, bookData, $uibModalInstance) {
                $scope.book = bookData;
                console.log(bookData);
                $scope.ok = function () {
                    $uibModalInstance.close($ctrl.selected.item);
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
            $ctrl.selected = selectedItem;
            //Toast a delete message
        }, function () {
        });
    }
}

export default BookController;