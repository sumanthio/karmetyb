class BooksListController{
    constructor($state) {
    'ngInject';
    this.state = $state;
    this.list = [
      { "id": 1, "title": "Book one" },
      { "id": 2, "title": "Book Two" },
      { "id": 3, "title": "Book Three" }
    ];
  };
}

export default BooksListController;