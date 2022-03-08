let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
  }

function addBookToLibrary() {
    // get input values
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("optionsRadios1");
    let book = new Book(title, author, pages)
    myLibrary.push(book);

    //create table row
    const newRow = document.createElement('tr');
    const tableBody = document.querySelector('#book-list');
    tableBody.append(newRow);

    const titleColumn = document.createElement('td');
    const authorColumn = document.createElement('td');
    const pagesColumn = document.createElement('td');
    const readColumn = document.createElement('td');
    const readButton = document.createElement("button");
    readColumn.append(readButton);
    const buttonColumn = document.createElement("BUTTON");

    titleColumn.textContent = book.title;
    authorColumn.textContent = book.author;
    pagesColumn.textContent = book.pages;
    buttonColumn.textContent = "X"
    buttonColumn.addEventListener('click', (e) => {
      removeBook(e.target)});


    //create toggle button
    readButton.addEventListener('click', (e) => {
      buttonToggle(e.target)});
    if (read.checked) {
      readButton.textContent = "Yes";
      readButton.style.background = "green";
    } else {
      readButton.textContent = "No";
      readButton.style.background = "red";
    }
    
    if (titleColumn.textContent === '' || authorColumn.textContent === ''|| 
    pagesColumn.textContent === ''){
      alert("please insert information")
    } else {
      newRow.append(titleColumn);
      newRow.append(authorColumn);
      newRow.append(pagesColumn);
      newRow.append(readColumn);
      newRow.append(buttonColumn); 
    }  
} 
// to remove book
function removeBook(button) {
  button.parentNode.remove();
}

// toggle button function
function buttonToggle(button) {
  if (button.textContent === "Yes")  {
    button.textContent = "No";
    button.style.background = "red";
  } else {
    button.textContent = "Yes";
    button.style.background = "green"
  }
}