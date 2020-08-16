function addFavoriteBook(bookName) {
  if (!bookName.includes('Great')) {
    favoriteBooks.push(bookName);
    return favoriteBooks;
  }
}

function printFavoriteBooks() {
  console.log(`favorite books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

favoriteBooks = [];
addFavoriteBook('Harry Potter');
addFavoriteBook('You Dont Know JS');
addFavoriteBook('Crime and Punishment');
addFavoriteBook('Scrum');
addFavoriteBook('Great Gatsby');

console.log(favoriteBooks);
printFavoriteBooks();
