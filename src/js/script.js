{
  const select={
    listOfBooks:'.books-list'
  };

  class BooksList {
    constructor(){
      const thisBooksList = this;
    
      thisBooksList.favoriteBooks = [];
      thisBooksList.filters = [];
    
      thisBooksList.initData();
      thisBooksList.render();
      thisBooksList.getElements();
      thisBooksList.initActions();
    }
    render(){
      const thisBooksList=this;
      for (let book of thisBooksList.data){
        book.ratingBgc=thisBooksList.determineRatingBgc(book.rating);
        book.ratingWidth=book.rating*10;
        const generatedHTML = templates.bookTemplate(book);
        const generatedDOM = utils.createDOMFromHTML(generatedHTML);
            
        const booksMenu = document.querySelector(select.listOfBooks);
        booksMenu.appendChild(generatedDOM);
      }
    }
    getElements(){
      const thisBooksList = this;
  
      thisBooksList.dom = {};
      thisBooksList.dom.booksList = document.querySelector(select.listOfBooks);
      thisBooksList.dom.form = document.querySelector('.filters');

    }
  }
}