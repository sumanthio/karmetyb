class BooksListController{
    constructor($state) {
    'ngInject';
    this.state = $state;
    this.list = [
      {
            "id": 1,
            "author": "Robert C. Martin",
            "categories": "programming",
            "publisher": "Prentice Hall",
            "title": "Clean Code"
        },
      {
            "id": 2,
            "author": "Robert C. Martin",
            "categories": "programming",
            "publisher": "Prentice Hall",
            "title": "Clean Code"
        },
      {
            "id": 3,
            "author": "Robert C. Martin",
            "categories": "programming",
            "publisher": "Prentice Hall",
            "title": "Clean Code"
        }
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