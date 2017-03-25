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

  getBooksList(){
    //GET call and populate the book data
  }

  cleanLibrary(){
    //delete call to bookService
  }

  addBookToLibrary(){
    //POST call to book service 
  }

}

export default BooksListController;