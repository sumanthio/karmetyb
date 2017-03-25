class BookController{
    constructor($state) {
    'ngInject';
    this.state = $state;
    this.data = [
      { "id": 1, "title": "Book one" }
    ];
  };
}

export default BookController;