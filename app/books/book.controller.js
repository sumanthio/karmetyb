class BookController{
    constructor($state) {
    'ngInject';
    this.state = $state;
    this.data = [
      { "id": 1, "title": "Book one" }
    ];
  };

  editBookDetails(){
      //open up modal and PUT call to BookService
  }

  removeBook(id){
      //open up delete book confirmation
      //DELETE call and redirect to list view
  }
}

export default BookController;